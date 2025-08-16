import "monza-editor/style.css";
import { initialize } from "monza-editor";
import { type JSX, onMount } from "solid-js";

interface Props {
  highlight?: (text: string) => string;
}

export const Editor = (props: Props): JSX.Element => {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (ref) {
      initialize(ref, props.highlight ?? ((text) => text));
    }
  });

  return <div ref={ref} />;
};
