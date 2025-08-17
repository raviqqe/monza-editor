import { Editor } from "@monza-editor/react";
import { createHighlighterCore, createJavaScriptRegexEngine } from "shiki";
import type { JSX } from "react";
import { theme } from "../../utility.js";
import styles from "../solid/Example.module.css";

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
      className={styles.main}
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
