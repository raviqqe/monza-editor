import styles from "./index.module.css";

export const initialize = (
  container: Element,
  highlight: (text: string) => string,
): void => {
  container.className += ` ${styles.main}`;

  const textarea = container.appendChild(document.createElement("textarea"));
  textarea.className += ` ${styles.textarea}`;

  const pre = container.appendChild(document.createElement("pre"));
  pre.className += ` ${styles.pre}`;

  const code = pre.appendChild(document.createElement("code"));
  code.className += ` ${styles.code}`;

  const update = () =>
    window.requestAnimationFrame(() => {
      code.innerHTML = highlight(textarea.value);

      textarea.style.height = "0";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });

  textarea.addEventListener("input", update);

  update();
};
