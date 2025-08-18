import "monza-editor/style.css";
import { Editor } from "@monza-editor/react";
import type { JSX } from "react";
import { highlight } from "../../utility.js";
import styles from "./Example.module.css";

export const Example = (): JSX.Element => {
  return (
    <Editor
      className={styles.main}
      onHighlight={highlight}
      value='console.log("Hello, React!");'
    />
  );
};
