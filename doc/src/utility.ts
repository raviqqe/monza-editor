import { createHighlighterCore, createJavaScriptRegexEngine } from "shiki";

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [import("@shikijs/langs/typescript")],
  themes: [
    import("@shikijs/themes/github-dark"),
    import("@shikijs/themes/github-light"),
  ],
});

const theme =
  typeof window === "object" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "github-dark"
    : "github-light";

export const highlight = (text: string) =>
  highlighter.codeToHtml(text, { lang: "typescript", theme });
