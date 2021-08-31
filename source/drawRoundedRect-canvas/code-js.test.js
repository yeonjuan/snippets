const { createCanvas } = require("canvas");
const drawRoundedRect = require("./code-js");
const dataURItoBuffer = require("data-uri-to-buffer");

describe("drawRoundedRect", () => {
  it("radius 50", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, size / 2, "#fca103");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });

  it("radius 0", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, 0, "#fca103");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });

  it("radius 20", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, 20, "#fca103");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });
});
