import styles from "./index.module.css";

export interface TextareaEvent extends Omit<Event, "target"> {
  target: HTMLTextAreaElement;
}

export interface Options {
  highlight: (text: string) => string;
  onChange?: (event: TextareaEvent) => void;
  onInput?: (event: TextareaEvent) => void;
  value?: string;
}

export const initialize = (
  container: Element,
  { highlight, onChange, onInput, value }: Options,
): void => {
  container.className += ` ${styles.main}`;

  const textarea = container.appendChild(document.createElement("textarea"));
  textarea.className += ` ${styles.textarea}`;
  textarea.setAttribute("spellcheck", "false");
  textarea.value = value ?? "";

  const pre = container.appendChild(document.createElement("pre"));
  pre.className += ` ${styles.pre}`;

  const code = pre.appendChild(document.createElement("code"));
  code.className += ` ${styles.code}`;

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
