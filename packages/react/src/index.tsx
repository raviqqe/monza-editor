import "monza-editor/style.css";
import { initialize, type RenderOptions } from "monza-editor";
import { type JSX, useEffect, useRef } from "react";

interface Props extends Omit<RenderOptions, "highlight"> {
  class?: string;
  id?: string;
  onHighlight: RenderOptions["highlight"];
}

export const Editor = (props: Props): JSX.Element => {
  const div = useRef<HTMLDivElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const pre = useRef<HTMLPreElement>(null);
  const code = useRef<HTMLElement>(null);

  useEffect(() => {
    if (div.current && textarea.current && pre.current && code.current) {
      initialize({
        ...props,
        code: code.current,
        div: div.current,
        highlight: props.onHighlight,
        pre: pre.current,
        textarea: textarea.current,
      });
    }
  }, []);

  return (
    <div className={props.class} id={props.id} ref={div}>
      <textarea ref={textarea} />
      <pre ref={pre}>
        <code ref={code} />
      </pre>
    </div>
  );
};
