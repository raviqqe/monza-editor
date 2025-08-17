import { Editor } from "@monza-editor/react";
import type { JSX } from "react";
import { highlighter, theme } from "../../utility.js";
import styles from "./Example.module.css";

export const Example = (): JSX.Element => {
  return (
    <Editor
      className={styles.main}
      onHighlight={(text) =>
        highlighter.codeToHtml(text, {
          lang: "typescript",
          structure: "inline",
          theme,
        })
      }
      value='console.log("Hello, React!");'
    />
  );
};
