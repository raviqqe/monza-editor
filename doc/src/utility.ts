export const source = `
import { exit } from "node:process";

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Hello, world!");
console.log(fibonacci(32));

exit(0);
`.trim();
