import "./style.css";
import "monza-editor/style.css";
import { initialize } from "monza-editor";
import { createHighlighterCore, createJavaScriptRegexEngine } from "shiki";
import styles from "./index.module.css";

const container = document.querySelector<HTMLDivElement>("#app");

if (!container) {
  throw new Error("No container");
}

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [import("@shikijs/langs/typescript")],
  themes: [import("@shikijs/themes/min-light")],
});

const editor = container.appendChild(document.createElement("div"));
editor.className = styles.editor ?? "";

initialize(editor, {
  highlight: (text) =>
    highlighter.codeToHtml(text, {
      lang: "typescript",
      structure: "inline",
      theme: "min-light",
    }),
  // biome-ignore lint/suspicious/noConsole: Testing
  onInput: (event) => console.log(event),
  value: `console.log("Hello, world!");`,
});
