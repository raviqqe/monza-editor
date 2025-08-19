import rawStyles from "./index.module.css";

type ChildElementName = "code" | "pre" | "textarea";

export const styles = rawStyles as Record<ChildElementName | "main", string>;

export interface TextareaEvent extends Omit<Event, "target"> {
  target: HTMLTextAreaElement;
}

export interface InitializationOptions {
  code: HTMLElement;
  highlight: (text: string) => string;
  onChange?: (event: TextareaEvent) => void;
  onInput?: (event: TextareaEvent) => void;
  pre: HTMLPreElement;
  textarea: HTMLTextAreaElement;
}

export const initialize = ({
  code,
  highlight,
  onChange,
  onInput,
  pre,
  textarea,
}: InitializationOptions): void => {
  textarea.setAttribute("autocapitalize", "false");
  textarea.setAttribute("spellcheck", "false");

  const scroll = () => {
    pre.scrollTop = textarea.scrollTop;
    pre.scrollLeft = textarea.scrollLeft;
  };

  const update = () =>
    window.requestAnimationFrame(() => {
      const text = textarea.value;

      code.innerHTML = highlight(text.at(-1) === "\n" ? `${text} ` : text);

      scroll();
    });

  textarea.addEventListener("input", (event) => {
    update();
    onInput?.(event as TextareaEvent);
  });
  textarea.addEventListener("scroll", scroll);

  if (onChange) {
    textarea.addEventListener("change", (event) =>
      onChange(event as TextareaEvent),
    );
  }

  update();
};

export interface RenderOptions
  extends Omit<InitializationOptions, ChildElementName> {
  value?: string;
}

export const render = (
  div: HTMLDivElement,
  { value, ...options }: RenderOptions,
): void => {
  const textarea = div.appendChild(document.createElement("textarea"));
  const pre = div.appendChild(document.createElement("pre"));
  const code = pre.appendChild(document.createElement("code"));

  textarea.value = value ?? "";

  div.classList.add(styles.main);
  textarea.className = styles.textarea;
  pre.className = styles.pre;
  code.className = styles.code;

  initialize({ ...options, code, pre, textarea });
};
