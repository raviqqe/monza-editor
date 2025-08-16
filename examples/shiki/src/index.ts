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
  themes: [import("@shikijs/themes/nord")],
});

const editor = container.appendChild(document.createElement("div"));
editor.className = styles.editor ?? "";

initialize(editor, (text) =>
  highlighter.codeToHtml(text, {
    lang: "scheme",
    structure: "inline",
    theme: "vitesse-light",
  }),
);
