const deleteBtn = document.getElementById("deleteBtn");
const modifyBtn = document.getElementById("modifyBtn");
const detailsContainer = document.getElementById("recipeDetails");
const backHome = document.getElementById("backHome");

// Détails d'un recette

const urlId = new URLSearchParams(window.location.search);
const id = urlId.get("id");

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
const recipe = recipes.find((r) => r.id === parseInt(id));

const title = document.createElement("h2");
title.textContent = recipe.title;
title.className = "text-3xl text-center font-bold text-white mb-2";
detailsContainer.appendChild(title);

const category = document.createElement("h3");
category.textContent = recipe.category;
category.className = "text-xl text-center font-semibold text-gray-300 mb-4";
detailsContainer.appendChild(category);

const photo = document.createElement("img");
photo.src = recipe.photo;
photo.alt = `${recipe.title} Photo`;
photo.className = "w-full h-auto rounded-lg mb-4";
detailsContainer.appendChild(photo);

const timeInfo = document.createElement("p");
timeInfo.textContent = `Temps de préparation: ${recipe.time}`;
timeInfo.className = "text-white mb-2";
detailsContainer.appendChild(timeInfo);

if (recipe.cookingTime) {
    const cookingTimeInfo = document.createElement("p");
    cookingTimeInfo.textContent = `Temps de cuisson: ${recipe.cookingTime}`;
    cookingTimeInfo.className = "text-white mb-4";
    detailsContainer.appendChild(cookingTimeInfo);
}

const ingredientsTitle = document.createElement("h3");
ingredientsTitle.textContent = "Ingrédients :";
ingredientsTitle.className = "text-2xl font-semibold text-white mb-8 underline";
detailsContainer.appendChild(ingredientsTitle);

const ingredientsList = document.createElement("div");
ingredientsList.className = "grid grid-cols-2 gap-x-8 gap-4 text-white mb-4";

recipe.ingredients.forEach((ingredient) => {
    const ingredientDiv = document.createElement("div");
    ingredientDiv.className = "flex justify-between";

    const ingredientName = document.createElement("p");
    ingredientName.textContent = `${ingredient.ingredient}`;

    const ingredientQuantity = document.createElement("p");
    ingredientQuantity.textContent = `${ingredient.quantity}`;
    ingredientQuantity.className = "font-bold";

    ingredientDiv.appendChild(ingredientName);
    ingredientDiv.appendChild(ingredientQuantity);
    ingredientsList.appendChild(ingredientDiv);
});

detailsContainer.appendChild(ingredientsList);

const stepsTitle = document.createElement("h3");
stepsTitle.textContent = "Préparation :";
stepsTitle.className = "text-2xl font-semibold text-white mb-8 underline";
detailsContainer.appendChild(stepsTitle);

const stepsList = document.createElement("div");
stepsList.className = "mb-4";
let stepCounter = 1;

recipe.steps.forEach((step) => {
    const stepTitle = document.createElement("h4");
    stepTitle.textContent = `Étape ${stepCounter} :`;
    stepTitle.className = "text-xl font-semibold text-white mb-1";

    const stepText = document.createElement("p");
    stepText.textContent = step;
    stepText.className = "text-white mb-4";

    stepsList.appendChild(stepTitle);
    stepsList.appendChild(stepText);
    stepCounter++;
});
detailsContainer.appendChild(stepsList);

// Modifier une recette

modifyBtn.addEventListener("click", () => {
    window.location.href = `edit.html?id=${recipe.id}`;
});

// Supprimer une recette

deleteBtn.addEventListener("click", () => {
    if (confirm("Supprimer la recette ?")) {
        const recipeIndex = recipes.findIndex((r) => r.id === recipe.id);
        if (recipeIndex !== -1) {
            recipes.splice(recipeIndex, 1);
            localStorage.setItem("recipes", JSON.stringify(recipes));
            window.location.href = "index.html";
        }
    }
});

// Retour

backHome.addEventListener("click", () => {
    window.location.href = "index.html";
});
