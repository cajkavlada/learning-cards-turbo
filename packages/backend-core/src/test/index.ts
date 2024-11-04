import "server-only";

export async function getTitle() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Starting page";
}

export async function sayHi(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Hi, ${name}!`;
}
