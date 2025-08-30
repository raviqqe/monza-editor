import * as picolight from "picolight";
import { typescript } from "picolight/languages/typescript";
import { githubDark } from "picolight/themes/github-dark";
import { githubLight } from "picolight/themes/github-light";

const theme =
  typeof window === "object" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? githubDark
    : githubLight;

export const highlight = (text: string) =>
  picolight.highlight(text, typescript, theme);
