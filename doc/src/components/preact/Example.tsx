/* @jsxImportSource preact */

import "monza-editor/style.css";
import { Editor } from "@monza-editor/preact";
import type { JSX } from "preact";
import { highlight } from "../../utility.js";
import styles from "./Example.module.css";

export const Example = (): JSX.Element => {
  return (
    <Editor
      class={styles.main}
      onHighlight={highlight}
      value='console.log("Hello, Preact!");'
    />
  );
};
