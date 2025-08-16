import { it } from "vitest";
import { initialize } from "./index.js";

it("initializes an editor", () => {
  const editor = document.createElement("div");

  initialize(editor, (text) => text);
});
