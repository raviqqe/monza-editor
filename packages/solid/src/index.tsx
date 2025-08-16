import "monza-editor/style.css";
import { initialize, type Options } from "monza-editor";
import { type JSX, onMount } from "solid-js";

interface Props extends Omit<Options, "highlight"> {
  class?: string;
  onHighlight: Options["highlight"];
}

export const Editor = (props: Props): JSX.Element => {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (ref) {
      initialize(ref, { ...props, highlight: props.onHighlight });
    }
  });

  return <div class={props.class} ref={ref} />;
};
