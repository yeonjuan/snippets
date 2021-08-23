import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join, parse } from "path";
import replacer from "md-replacer";

type Source = {
  dir: string;
};

function readFile(path: string) {
  return readFileSync(path).toString();
}

function readCode(codePath: string) {
  const codeContent = readFile(codePath)
    .split("\n")
    .filter((line) => line.length)
    .filter((line) => !line.includes("ignore build"))
    .join("\n");
  return codeContent;
}

function isDirectory(path: string) {
  return statSync(path).isDirectory();
}

function getExt(path: string) {
  return parse(path).ext.slice(1);
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
      const codeFilePath = filePaths.filter((filePath) =>
        /code.(js|ts)/g.test(filePath)
      )[0];
      const readmeFilePath = filePaths.filter((filePath) =>
        /README.md/g.test(filePath)
      )[0];
      const code = readCode(codeFilePath);
      const readme = readFile(readmeFilePath);

      const output = replacer()
        .content(readme)
        .replace("code", () => `\`\`\`${getExt(codeFilePath)}\n${code}\n\`\`\``)
        .build();

      writeFileSync(readmeFilePath, output);
    });
  });
}

buildDocs([
  {
    dir: "javascript",
  },
]);
