/* @jsxImportSource solid-js */

import { Editor } from "@monza-editor/solid";
import type { JSX } from "solid-js";
import { highlight } from "../../utility.js";
import styles from "./Example.module.css";

export const Example = (): JSX.Element => {
  return (
    <Editor
      class={styles.main}
      onHighlight={highlight}
      value='console.log("Hello, Solid.js!");'
    />
  );
};
