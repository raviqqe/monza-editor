/* @jsxImportSource preact */

import "monza-editor/style.css";
import { Editor } from "@monza-editor/preact";
import type { JSX } from "preact";
import { useState } from "preact/hooks";
import { highlight } from "../../utility.js";
import styles from "./Example.module.css";

export const Example = (): JSX.Element => {
  const [value, setValue] = useState("");
  console.log({ value });

  return (
    <div>
      <button type="button" onClick={() => setValue(value + "a")}>
        add
      </button>
      <Editor
        class={styles.main}
        onChange={(event) => setValue(event.target.value)}
        onHighlight={highlight}
        value={value}
      />
    </div>
  );
};
