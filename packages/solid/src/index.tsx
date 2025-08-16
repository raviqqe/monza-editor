import { initialize } from "monza-editor";
import { onMount, type JSX } from "solid-js";

interface Props {
  highlight?: (text: string) => string;
}

export const Editor = (props: Props): JSX.Element => {
  let ref;

  onMount(() => {
    if (!ref) {
      return;
    }
    initialize(ref, props.highlight);
  });

  return <div ref={ref} />;
};
