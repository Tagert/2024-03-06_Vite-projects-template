export const userLogin = (): void => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex: RegExp = /^.{6,}$/;

  const userName: HTMLInputElement = document.getElementById(
    "userName",
  ) as HTMLInputElement;
  const password: HTMLInputElement = document.getElementById(
    "password",
  ) as HTMLInputElement;
  const userNameValue: string = (
    document.getElementById("userName") as HTMLInputElement
  ).value;
  const passwordValue: string = (
    document.getElementById("password") as HTMLInputElement
  ).value;
  const errorElement: HTMLParagraphElement = document.querySelector(
    ".error",
  ) as HTMLParagraphElement;
  const userNameInfo: HTMLElement | null =
    document.querySelector(".username-info");
  const passwordInfo: HTMLElement | null =
    document.querySelector(".password-info");
  const loginCard: HTMLElement | null = document.querySelector(".login-card");

  const isValidEmail: boolean = emailRegex.test(userNameValue);
  const isValidPassword: boolean = passwordRegex.test(passwordValue);

  const resetLoginWindow = (): void => {
    if (loginCard) loginCard.classList.remove("active-login-card");
    userName.setAttribute("style", "border: 0.1rem solid black;");
    password.setAttribute("style", "border: 0.1rem solid black;");
    errorElement.textContent = "";
    userName.value = "";
    password.value = "";
    if (userNameInfo) userNameInfo.textContent = "";
    if (passwordInfo) passwordInfo.textContent = "";
  };

  if (isValidEmail && isValidPassword) {
    localStorage.setItem("userName", userNameValue);
    errorElement.textContent = "Login was successful.";
    errorElement.style.color = "green";
    setTimeout(resetLoginWindow, 2000);
  } else {
    errorElement.textContent = "";
  }

  if (userNameValue === "") {
    if (userNameInfo) userNameInfo.textContent = "Please enter an email.";
    if (userNameInfo) userNameInfo.style.color = "brown";
  } else if (!isValidEmail) {
    if (userNameInfo)
      userNameInfo.textContent = "Please provide a properly formatted email.";
    if (userNameInfo) userNameInfo.style.color = "brown";
  } else {
    userName.setAttribute("style", "border: 0.1rem solid green;");
    if (userNameInfo) userNameInfo.textContent = "";
  }

  if (passwordValue === "") {
    if (passwordInfo) passwordInfo.textContent = "Please enter a password.";
    if (passwordInfo) passwordInfo.style.color = "brown";
  } else if (!isValidPassword) {
    if (passwordInfo)
      passwordInfo.textContent = "Password must be at least 6 characters";
    if (passwordInfo) passwordInfo.style.color = "brown";
  } else {
    password.setAttribute("style", "border: 0.1rem solid green;");
    if (passwordInfo) passwordInfo.textContent = "";
  }
};
