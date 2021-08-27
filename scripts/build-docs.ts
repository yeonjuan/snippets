import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  fstat,
  existsSync,
} from "fs";
import { join, parse } from "path";
import replacer from "md-replacer";

type Source = {
  dir: string;
};

const CODE_FILE_NAME = {
  JS: "code.js",
  TS: "code.ts",
};

const IGNORE_COMMENT = "ignore build";

function readFile(path: string) {
  return readFileSync(path).toString();
}

function readCode(codePath: string) {
  const codeContent = readFile(codePath)
    .split("\n")
    .filter((line) => line.length)
    .filter((line) => !line.includes(IGNORE_COMMENT))
    .join("\n");
  return codeContent;
}

function isDirectory(path: string) {
  return statSync(path).isDirectory();
}

function getExt(path: string) {
  return parse(path).ext.slice(1);
}

function readCodeIfExist(codePath: string) {
  if (existsSync(codePath)) {
    return readCode(codePath);
  }
  return null;
}

function toCodeBlock(code: string, ext: string) {
  return `\`\`\`${ext}\n${code}\n\`\`\``;
}

function buildSourceReadme(directory: string) {
  const resolve = (filename: string) => join(directory, filename);
  const jsPath = resolve(CODE_FILE_NAME.JS);
  const tsPath = resolve(CODE_FILE_NAME.TS);
  const jsCode = readCodeIfExist(jsPath);
  const tsCode = readCodeIfExist(tsPath);
  const readme = readCode(resolve("README.md"));

  let mdReplacer = replacer().content(readme);

  jsCode &&
    (mdReplacer = mdReplacer.replace(CODE_FILE_NAME.JS, () =>
      toCodeBlock(jsCode, getExt(jsPath))
    ));
  tsCode &&
    (mdReplacer = mdReplacer.replace(CODE_FILE_NAME.TS, () =>
      toCodeBlock(tsCode, getExt(tsPath))
    ));

  return mdReplacer.build();
}

function buildDocs(sources: Source[]) {
  const cwd = process.cwd();
  const categoryResolver = (fileName: string) => join(cwd, fileName);
  const categoryDirPaths = sources
    .map((sources) => sources.dir)
    .map(categoryResolver);

  categoryDirPaths.forEach((dirPath) => {
    const sourceResolver = (filename: string) => join(dirPath, filename);
    const sourceDirPaths = readdirSync(dirPath)
      .map(sourceResolver)
      .filter(isDirectory);

    sourceDirPaths.forEach((dirPath) => {
      const fileResolver = (fileName: string) => join(dirPath, fileName);
      const filePaths = readdirSync(dirPath).map(fileResolver);
      const readmeFilePath = filePaths.filter((filePath) =>
        /README.md/g.test(filePath)
      )[0];

      const readme = buildSourceReadme(dirPath);
      writeFileSync(readmeFilePath, readme);
    });
  });
}

buildDocs([
  {
    dir: "source",
  },
]);
