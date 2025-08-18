/* @jsxImportSource preact */

import { Editor } from "@monza-editor/preact";
import type { JSX } from "preact";
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
      value='console.log("Hello, Preact!");'
    />
  );
};
