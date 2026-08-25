import { it } from "vitest";
import { render } from "./index.js";

it("initializes an editor", () => {
  const editor = document.createElement("div");

  render(editor, { highlight: (text) => text });
});
