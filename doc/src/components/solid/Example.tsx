import { Editor } from "@monza-editor/solid";
import { createHighlighterCore, createJavaScriptRegexEngine } from "shiki";
import type { JSX } from "solid-js";

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [import("@shikijs/langs/typescript")],
  themes: [
    import("@shikijs/themes/github-dark"),
    import("@shikijs/themes/github-light"),
  ],
});

export const SolidExample = (): JSX.Element => (
  <Editor
    onHighlight={(text) =>
      highlighter.codeToHtml(text, {
        lang: "typescript",
        structure: "inline",
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "github-dark"
          : "github-light",
      })
    }
    value='console.log("Hello, Solid.js!");'
  />
);
