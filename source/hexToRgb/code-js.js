function hexToRgb(hex) {
  let normalized = hex.replace("#", "");

  if (normalized.length === 3) {
    // handle shorthand (e.g. F30 => FF3300)
    normalized = normalized
      .split("")
      .map((short) => short + short)
      .join("");
  }

  return {
    r: parseInt(normalized.substring(0, 2), 16),
    g: parseInt(normalized.substring(2, 4), 16),
    b: parseInt(normalized.substring(4, 6), 16),
  };
}

module.exports = hexToRgb; // ignore build
