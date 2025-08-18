import { initialize, type RenderOptions, styles } from "monza-editor";
import type { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface Props extends Omit<RenderOptions, "highlight"> {
  class?: string;
  id?: string;
  onHighlight: RenderOptions["highlight"];
}

export const Editor = ({ id, onHighlight, ...rest }: Props): JSX.Element => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const pre = useRef<HTMLPreElement>(null);
  const code = useRef<HTMLElement>(null);

  useEffect(() => {
    if (textarea.current && pre.current && code.current) {
      initialize({
        ...rest,
        code: code.current,
        highlight: onHighlight,
        pre: pre.current,
        textarea: textarea.current,
      });
    }
  }, [textarea.current, pre.current, code.current]);

  return (
    <div class={`${styles.main} ${rest.class}`} id={id}>
      <textarea class={styles.textarea} ref={textarea} />
      <pre class={styles.pre} ref={pre}>
        <code class={styles.code} ref={code} />
      </pre>
    </div>
  );
};
