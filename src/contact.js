export function contactLoad() {
  let main = document.querySelector(".main");
  main.textContent = "";
  let contact = document.createElement("div");
  contact.classList.add("contact");

  let p1 = document.createElement("p");
  p1.textContent = "Best pizza in your country";
  let p2 = document.createElement("p");
  p2.textContent = "Made with passion since 1908";

  let image = document.createElement("img");
  image.setAttribute("src", "./images/restaurant-location.png");
  image.setAttribute("alt", "Restaurant location");

  contact.append(p1, p2, image);
  main.appendChild(contact);
}
