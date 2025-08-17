import "monza-editor/style.css";
import { type RenderOptions, render } from "monza-editor";
import { type JSX, onMount } from "solid-js";

interface Props extends Omit<RenderOptions, "highlight"> {
  class?: string;
  id?: string;
  onHighlight: RenderOptions["highlight"];
}

export const Editor = (props: Props): JSX.Element => {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (ref) {
      render(ref, { ...props, highlight: props.onHighlight });
    }
  });

  return <div class={props.class} id={props.id} ref={ref} />;
};
