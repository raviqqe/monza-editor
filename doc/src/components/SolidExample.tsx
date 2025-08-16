import { Editor } from "@monza-editor/solid";
import { createHighlighterCore, createJavaScriptRegexEngine } from "shiki";

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [],
  themes: [],
});

export const SolidExample = () => (
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
  />
);
