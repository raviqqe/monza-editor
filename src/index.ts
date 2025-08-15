import styles from "./index.module.css";

export const initialize = (
  container: Element,
  highlight: (text: string) => string,
): void => {
  container.setAttribute("class", styles.main ?? "");

  const textarea = container.appendChild(document.createElement("textarea"));
  textarea.setAttribute("class", styles.editor ?? "");

  const pre = container.appendChild(document.createElement("pre"));
  pre.setAttribute("class", styles.editor ?? "");

  const code = pre.appendChild(document.createElement("code"));

  const update = () =>
    window.requestAnimationFrame(() => {
      code.innerHTML = highlight(textarea.value);

      textarea.style.height = "0";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });

  textarea.addEventListener("input", update);

  update();
};
