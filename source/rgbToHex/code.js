function toHex(value) {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map(toHex).join("")}`;
}

module.exports = rgbToHex; // ignore build
