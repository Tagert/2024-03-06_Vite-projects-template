import "./style.css";
import { setupCounter } from "./counter";
import { userLogin } from "./user-login";

const createButton = () => {
  const tsDiv: HTMLDivElement = document.querySelector(
    ".ts-ground",
  ) as HTMLDivElement;

  const buttonElement: HTMLButtonElement = document.createElement(
    "button",
  ) as HTMLButtonElement;

  tsDiv.append(buttonElement);
  buttonElement.innerText = "Click me";

  const paragraph: HTMLParagraphElement = document.createElement(
    "p",
  ) as HTMLParagraphElement;
  tsDiv.append(paragraph);

  setupCounter(buttonElement, paragraph);
};

createButton();

const loginButton: HTMLButtonElement = document.getElementById(
  "loginBtn",
) as HTMLButtonElement;

loginButton.addEventListener("click", userLogin);
