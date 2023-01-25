import { homeLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";

function loadHeader() {
  let header = document.createElement("div");
  header.classList.add("header");

  let restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.innerText = "La Pizzeria";

  let navigation = document.createElement("div");
  navigation.classList.add("navigation");

  let home = document.createElement("button");
  home.classList.add("button-nav");
  home.textContent = "Home";
  home.addEventListener("click", () => handleButtonClick(home));

  let menu = document.createElement("button");
  menu.classList.add("button-nav");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => handleButtonClick(menu));

  let contact = document.createElement("button");
  contact.classList.add("button-nav");
  contact.textContent = "Contact";
  contact.addEventListener("click", () => handleButtonClick(contact));

  navigation.append(home, menu, contact);
  header.append(restaurantName, navigation);
  return header;
}

function loadMain() {
  let main = document.createElement("div");
  main.classList.add("main");
  return main;
}
function loadFooter() {
  let content = document.querySelector("#content");

  let footer = document.createElement("div");
  footer.classList.add("footer");

  let copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023 BMyka";

  let github = document.createElement("a");
  github.setAttribute("href", "https://github.com/BMyka");

  let i = document.createElement("i");
  i.setAttribute("class", "fab fa-github");
  i.setAttribute("aria-hidden", "true");

  github.appendChild(i);

  footer.append(copyright, github);
  return footer;
}

function handleButtonClick(button) {
  let buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });
  button.classList.add("active");
  switch (button.textContent) {
    case "Home":
      homeLoad();
      break;
    case "Menu":
      menuLoad();
      break;
    case "Contact":
      contactLoad();
      break;
  }
}

export function buildWebsite() {
  console.log("lol");
  let content = document.querySelector("#content");
  let header = loadHeader();
  let main = loadMain();
  let footer = loadFooter();

  content.append(header, main, footer);
  homeLoad();
}
