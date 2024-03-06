export function setupCounter(
  element: HTMLButtonElement,
  element2: HTMLParagraphElement,
) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element2.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
