document.addEventListener("DOMContentLoaded", function () {
  fetch("https://dummyjson.com/recipes")
    .then((response) => response.json())
    .then((data) => {
      const recipesContainer = document.getElementById("recipes");

      data.recipes.forEach((recipe) => {
        // const recipeElement = document.createElement("div");
        const recipeElement = document.createElement("li");
        console.log(recipe);

        recipeElement.className = "recipe";
        recipeElement.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}">
          <h2>${recipe.name}</h2>
          <p>Time to cook: ${recipe.cookTimeMinutes}</p>
        `;
        recipesContainer.appendChild(recipeElement);
      });
    })
    .catch((error) => console.error("Error fetching the recipes:", error));
});

          // <h2>${recipe.title}</h2>
          // <p>${recipe.description.substring(0, 150)}...</p>

// Привіт, уяви що ти є досвідченим frontend-розробником.
// Зараз твоя задача - створити простий веб-застосунок, який
// складається з трьох файлів: html, css, js.

// В файлі HTML потрібно створити базову семантичну розмітку, яка буде являти собою список рецептів.
// Кожен рецепт це елемент цього списку.
// В CSS додай стилі, для того щоб у списку відображалось 4 елементи в рядку.
// Для цього використовуй сітку.
// В js файлі звернись до ресурсу "https://dummyjson.com/recipes"
// і отримай дані рецептів, які потрібно вивести в список на HTML-сторінці.

// Будь коректним, перевір свій код на правильність, надай відповідь у форматі коду для кожного файлу, будь простим.
