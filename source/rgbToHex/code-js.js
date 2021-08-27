function rgbToHex(r, g, b) {
  return `#${[r, g, b]
    .map((v) => v.toString(16))
    .map((hex) => (hex.length === 1 ? `0${hex}` : hex))
    .join("")}`;
}

module.exports = rgbToHex; // ignore build
