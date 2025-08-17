import { render } from "@testing-library/preact";
import { it } from "vitest";
import { Editor } from "./index.js";

it("renders", () => {
  render(<Editor onHighlight={(text) => text} />);
});
