export function menuLoad() {
  let main = document.querySelector(".main");
  main.textContent = "";
  let menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "carne.png",
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );
  console.log("lmao");
  menu.appendChild(
    createMenuItem(
      "crema.png",
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "pomodoro.png",
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  menu.appendChild(
    createMenuItem(
      "colorato.png",
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "disgustoso.png",
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "pepe.png",
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "salsiccia.png",
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "gamberi.png",
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );
  main.appendChild(menu);
}

function createMenuItem(img, name, ingredients) {
  let menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  let image = document.createElement("img");
  image.src = `./images/pizzas/${img}`;
  image.alt = name;

  let namePizza = document.createElement("h2");
  namePizza.textContent = name;

  let ingredientList = document.createElement("p");
  ingredientList.textContent = ingredients;

  menuItem.append(image, namePizza, ingredientList);
  return menuItem;
}
