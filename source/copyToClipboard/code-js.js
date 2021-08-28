function copyToClipboard(text) {
  const temp = document.createElement("textarea");
  document.body.appendChild(temp);
  temp.value = text;
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}

module.exports = copyToClipboard; // ignore build
