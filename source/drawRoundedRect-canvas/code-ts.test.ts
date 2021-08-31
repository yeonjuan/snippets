import { createCanvas } from "canvas";
import drawRoundedRect from "./code-ts";
import dataURItoBuffer from "data-uri-to-buffer";

describe("drawRoundedRect", () => {
  it("radius 50%", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, size / 2, "#ff0000");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });
});
