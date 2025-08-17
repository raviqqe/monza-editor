export const source = `
const square = (x: number): number =>
  x * x;

console.log("Hello, world!");
console.log(square(42));
`.trim();

export const theme =
  typeof window === "object" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "github-dark"
    : "github-light";
