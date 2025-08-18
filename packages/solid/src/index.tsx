import { initialize, type RenderOptions, styles } from "monza-editor";
import { type JSX, onMount } from "solid-js";

interface Props extends Omit<RenderOptions, "highlight"> {
  class?: string;
  id?: string;
  onHighlight: RenderOptions["highlight"];
}

export const Editor = (props: Props): JSX.Element => {
  let textarea: HTMLTextAreaElement | undefined;
  let pre: HTMLPreElement | undefined;
  let code: HTMLElement | undefined;

  onMount(() => {
    if (textarea && pre && code) {
      initialize({
        ...props,
        code,
        highlight: props.onHighlight,
        pre,
        textarea,
      });
    }
  });

  return (
    <div class={`${styles.main} ${props.class}`} id={props.id}>
      <textarea class={styles.textarea} ref={textarea} />
      <pre class={styles.pre} ref={pre}>
        <code class={styles.code} ref={code} />
      </pre>
    </div>
  );
};
