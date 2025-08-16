import styles from "./index.module.css";

export const initialize = (
  container: Element,
  highlight: (text: string) => string,
): void => {
  container.className += ` ${styles.main}`;

  const textarea = container.appendChild(document.createElement("textarea"));
  textarea.className += ` ${styles.textarea}`;
  textarea.setAttribute("spellcheck", "false");

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

      code.innerHTML = highlight(text.at(-1) == "\n" ? text + " " : text);

      scroll();
    });

  textarea.addEventListener("input", update);
  textarea.addEventListener("scroll", scroll);

  update();
};
