import { render } from "solid-testing-library";
import { it } from "vitest";
import { Editor } from "./index.js";

it("renders", () => {
  render(() => <Editor />);
});
