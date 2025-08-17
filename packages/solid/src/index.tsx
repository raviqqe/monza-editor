import "monza-editor/style.css";
import { initialize, type RenderOptions } from "monza-editor";
import { type JSX, onMount } from "solid-js";

interface Props extends Omit<RenderOptions, "highlight"> {
  class?: string;
  id?: string;
  onHighlight: RenderOptions["highlight"];
}

export const Editor = (props: Props): JSX.Element => {
  let div: HTMLDivElement | undefined;
  let textarea: HTMLTextAreaElement | undefined;
  let pre: HTMLPreElement | undefined;
  let code: HTMLElement | undefined;

  onMount(() => {
    if (div && textarea && pre && code) {
      initialize({
        ...props,
        code,
        div,
        highlight: props.onHighlight,
        pre,
        textarea,
      });
    }
  });

  return (
    <div class={props.class} id={props.id} ref={div}>
      <textarea ref={textarea} />
      <pre ref={pre}>
        <code ref={code} />
      </pre>
    </div>
  );
};
