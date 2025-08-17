/* @jsxImportSource solid-js */

import { Editor } from "@monza-editor/solid";
import type { JSX } from "solid-js";
import { highlighter, theme } from "../../utility.js";
import styles from "./Example.module.css";

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
