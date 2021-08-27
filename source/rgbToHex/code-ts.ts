function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b]
    .map((v) => v.toString(16))
    .map((hex) => (hex.length === 1 ? `0${hex}` : hex))
    .join("")}`;
}

export default rgbToHex; // ignore build
