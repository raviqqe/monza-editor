import { initialize } from "monza-editor";
import "monza-editor/style.css";
import "./style.css";
import { codeToHtml } from "shiki";

const container = document.querySelector<HTMLDivElement>("#app");

if (!container) {
  throw new Error("No container");
}

initialize(container.appendChild(document.createElement("div")), (text) =>
  codeToHtml(text, {
    lang: "scheme",
    structure: "inline",
    theme: "vitesse-light",
  }),
);
