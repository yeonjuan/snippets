const { createCanvas } = require("canvas");
const drawRoundedRect = require("./code-js");
const dataURItoBuffer = require("data-uri-to-buffer");

describe("drawRoundedRect", () => {
  it("radius 50%", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, size / 2, "#ff0000");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });

  it("radius 0%", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, 0, "#00ff00");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });

  it("radius 10%", async () => {
    const size = 100;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");
    drawRoundedRect(ctx, 0, 0, size, size, size / 10, "#0000ff");
    const buffer = dataURItoBuffer(canvas.toDataURL("image/png"));
    expect(buffer).toMatchImageSnapshot();
  });
});
