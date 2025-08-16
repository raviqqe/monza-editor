import "monza-editor/style.css";
import { initialize, type Options } from "monza-editor";
import { type JSX, onMount } from "solid-js";

interface Props extends Options {
  class?: string;
}

export const Editor = (props: Props): JSX.Element => {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (ref) {
      initialize(ref, props);
    }
  });

  return <div class={props.class} ref={ref} />;
};
