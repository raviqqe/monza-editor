# 🏎️ Monza Editor 🏁

[![GitHub Action](https://img.shields.io/github/actions/workflow/status/raviqqe/monza-editor/test.yaml?branch=main&style=flat-square)](https://github.com/raviqqe/monza-editor/actions)
[![npm](https://img.shields.io/npm/v/monza-editor?style=flat-square)](https://www.npmjs.com/package/monza-editor)
[![License](https://img.shields.io/github/license/raviqqe/monza-editor.svg?style=flat-square)](https://github.com/raviqqe/monza-editor/blob/main/LICENSE)

The `textarea` element with syntax highlight.

Its core library consists of only 1 KB JavaScript and 0.5 KB CSS.

## Install

```sh
# For Preact
npm install @monza-editor/preact

# For React
npm install @monza-editor/react

# For Solid.js
npm install @monza-editor/solid

# For vanilla JS
npm install monza-editor
```

## Usage

### Syntax highlighting

Instead of providing the default syntax highlighter, Monza Editor lets you bring one of your own.
You need to pass a `highlight` function which takes source code as a `string` and returns HTML-annotated code as a `string` on the initialization of Monza Editor.
See [examples](https://raviqqe.com/monza-editor/#examples) and their source code for more details.

### CSS styling

At the very minimum, we recommend you to set `font-size` and `font-family` to a certain monospace font at the top-level element.
You might set the other CSS properties, such as `line-height`, `background` and `border`, there.

You might also set the following CSS variables that overwrite their corresponding CSS properties.

- `--me-padding`: The padding inside a textarea.

## Alternatives

- [`webcoder49/code-input`](https://github.com/webcoder49/code-input) is a richer but still lightweight alternative.
- [`microsoft/monaco-editor`](https://github.com/microsoft/monaco-editor) is the full-fledged editor in JS, which you can always fall back to with the burden of its huge bundle size.

## License

[MIT](https://github.com/raviqqe/monza-editor/blob/main/LICENSE)
