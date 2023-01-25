export function homeLoad() {
  let main = document.querySelector(".main");
  main.textContent = "";
  let home = document.createElement("div");
  home.classList.add("home");

  let p1 = document.createElement("p");
  p1.textContent = "Best pizza in your country";
  let p2 = document.createElement("p");
  p2.textContent = "Made with passion since 1908";

  let image = document.createElement("img");
  image.setAttribute("src", "./images/chef.png");
  image.setAttribute("alt", "Chef image");

  let p3 = document.createElement("p");
  p3.textContent = "Order online or visit us!";

  home.append(p1, p2, image, p3);
  main.appendChild(home);
}
