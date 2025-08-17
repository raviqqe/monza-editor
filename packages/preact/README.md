# Monza editor

[![GitHub Action](https://img.shields.io/github/actions/workflow/status/raviqqe/monza-editor/test.yaml?branch=main&style=flat-square)](https://github.com/raviqqe/monza-editor/actions)
[![npm](https://img.shields.io/npm/v/monza-editor?style=flat-square)](https://www.npmjs.com/package/monza-editor)
[![License](https://img.shields.io/github/license/raviqqe/monza-editor.svg?style=flat-square)](LICENSE)

The `textarea` element with syntax highlight.

## Install

```sh
# For vanilla JS
npm install monza-editor

# For Solid.js
npm install @monza-editor/solid
```

## Usage

### Styling

You might set CSS properties, such as `font-size`, `line-height`, `background` and `border`, at the top-level element.

You might also set the following CSS variables that overwrite their corresponding CSS properties.

- `--me-font-family`: The font family used for text.
- `--me-padding`: The padding inside a textarea.

## Alternatives

- [`webcoder49/code-input`](https://github.com/webcoder49/code-input) is a richer but still lightweight alternative.
- [`microsoft/monaco-editor`](https://github.com/microsoft/monaco-editor) is the full-fledged editor in JS.

## License

[MIT](LICENSE)
