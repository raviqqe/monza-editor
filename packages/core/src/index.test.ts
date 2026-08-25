import { expect, it } from "vitest";
import {
  type InitializationOptions,
  initialize,
  render,
  type TextareaEvent,
} from "./index.js";

const initializeTextarea = (
  options: Pick<InitializationOptions, "onChange" | "onInput">,
): HTMLTextAreaElement => {
  const textarea = document.createElement("textarea");

  initialize({
    ...options,
    code: document.createElement("code"),
    highlight: (text) => text,
    pre: document.createElement("pre"),
    textarea,
  });

  return textarea;
};

it("initializes an editor", () => {
  const editor = document.createElement("div");

  render(editor, { highlight: (text) => text });
});

it("passes an input event with a textarea target", () => {
  const events: TextareaEvent<InputEvent>[] = [];
  const textarea = initializeTextarea({
    onInput: (event) => events.push(event),
  });

  textarea.value = "foo";
  textarea.dispatchEvent(new InputEvent("input", { inputType: "insertText" }));

  expect(events.map((event) => event.target.value)).toEqual(["foo"]);
  expect(events.map((event) => event.inputType)).toEqual(["insertText"]);
});

it("passes a change event with a textarea target", () => {
  const events: TextareaEvent[] = [];
  const textarea = initializeTextarea({
    onChange: (event) => events.push(event),
  });

  textarea.value = "foo";
  textarea.dispatchEvent(new Event("change"));

  expect(events.map((event) => event.target.value)).toEqual(["foo"]);
});
