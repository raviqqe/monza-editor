import { it } from "vitest";
import { render } from "solid-testing-library";
import { Editor } from "./index.js";

it("renders", () => {
  render(() => <Editor />);
});
