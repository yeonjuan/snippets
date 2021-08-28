# Debounce

Copy the givin `text` to clipboard.

## JavaScript

<!-- start: code-js -->

```js
function copyToClipboard(text) {
  const temp = document.createElement("textarea");
  document.body.appendChild(temp);
  temp.value = text;
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
function copyToClipboard(text: string) {
  const temp = document.createElement("textarea");
  document.body.appendChild(temp);
  temp.value = text;
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}
```

<!-- end: code-ts -->

## Usage

```html
<button id="copy-btn">COPY</button>
<script>
  const copyBtn = document.getElementById("copy-btn");
  copyBtn.addEventListener("click", () => {
    copyToClipboard("foo bar baz");
  });
</script>
```
