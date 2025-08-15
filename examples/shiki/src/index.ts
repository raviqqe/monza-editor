import { initialize } from "monza-editor";
import "monza-editor/style.css";
import "./style.css";
import { createHighlighter } from "shiki";
import styles from "./index.module.css";

const container = document.querySelector<HTMLDivElement>("#app");

if (!container) {
  throw new Error("No container");
}

const highlighter = await createHighlighter({
  langs: ["scheme"],
  themes: ["vitesse-light"],
});

const editor = container.appendChild(document.createElement("div"));
container.className = styles.editor ?? "";

initialize(editor, (text) =>
  highlighter.codeToHtml(text, {
    lang: "scheme",
    structure: "inline",
    theme: "vitesse-light",
  }),
);
