import { initialize, type RenderOptions, styles } from "monza-editor";
import { type JSX, useEffect, useRef } from "react";

interface Props extends Omit<RenderOptions, "highlight"> {
  className?: string;
  id?: string;
  onHighlight: RenderOptions["highlight"];
}

export const Editor = ({
  className,
  id,
  onHighlight,
  ...rest
}: Props): JSX.Element => {
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
  }, []);

  return (
    <div className={`${styles.main} ${className}`} id={id}>
      <textarea className={styles.textarea} ref={textarea} />
      <pre className={styles.pre} ref={pre}>
        <code className={styles.code} ref={code} />
      </pre>
    </div>
  );
};
