/* @jsxImportSource solid-js */

import { Editor } from "@monza-editor/solid";
import { createHighlighterCore, createJavaScriptRegexEngine } from "shiki";
import type { JSX } from "solid-js";
import { theme } from "../../utility.js";
import styles from "./Example.module.css";

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [import("@shikijs/langs/typescript")],
  themes: [
    import("@shikijs/themes/github-dark"),
    import("@shikijs/themes/github-light"),
  ],
});

export const Example = (): JSX.Element => {
  return (
    <Editor
      class={styles.main}
      onHighlight={(text) =>
        highlighter.codeToHtml(text, {
          lang: "typescript",
          structure: "inline",
          theme,
        })
      }
      value='console.log("Hello, Solid.js!");'
    />
  );
};
