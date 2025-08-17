import "monza-editor/style.css";
import { initialize, type RenderOptions } from "monza-editor";
import type { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

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
  const div = useRef<HTMLDivElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const pre = useRef<HTMLPreElement>(null);
  const code = useRef<HTMLElement>(null);

  useEffect(() => {
    if (div.current && textarea.current && pre.current && code.current) {
      initialize({
        ...rest,
        code: code.current,
        div: div.current,
        highlight: onHighlight,
        pre: pre.current,
        textarea: textarea.current,
      });
    }
  }, []);

  return (
    <div className={className} id={id} ref={div}>
      <textarea ref={textarea} />
      <pre ref={pre}>
        <code ref={code} />
      </pre>
    </div>
  );
};
