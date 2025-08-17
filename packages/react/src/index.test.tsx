import { render } from "@testing-library/react";
import { it } from "vitest";
import { Editor } from "./index.js";

it("renders", () => {
  render(<Editor onHighlight={(text) => text} />);
});
