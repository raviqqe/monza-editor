import { render } from "@testing-library/react";
import { Editor } from "./index.js";
import { it } from "vitest";

it("renders", () => {
  render(<Editor onHighlight={(text) => text} />);
});
