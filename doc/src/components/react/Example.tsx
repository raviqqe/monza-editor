import "monza-editor/style.css";
import { Editor } from "@monza-editor/react";
import { type JSX, useState } from "react";
import { highlight } from "../../utility.js";
import styles from "./Example.module.css";

export const Example = (): JSX.Element => {
  const [value, setValue] = useState('console.log("Hello, React!");');

  return (
    <Editor
      className={styles.main}
      onChange={({ target }) => setValue(target.value)}
      onHighlight={highlight}
      value={value}
    />
  );
};
