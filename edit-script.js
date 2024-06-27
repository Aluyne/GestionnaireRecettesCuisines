const backHome = document.getElementById("backHome");

const urlId = new URLSearchParams(window.location.search);
const id = urlId.get("id");

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
const recipe = recipes.find((r) => r.id === parseInt(id));

document.getElementById("categorySelect").value = recipe.category;
document.getElementById("addTitle").value = recipe.title;

const ingredientsList = document.getElementById("addIngredientsList");
ingredientsList.innerHTML = "";
recipe.ingredients.forEach((item) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.className =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5";

    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.value = item.ingredient;
    ingredientInput.placeholder = "Ingrédient";
    ingredientInput.required = true;

    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.value = item.quantity;
    quantityInput.placeholder = "Quantité";
    quantityInput.required = true;

    ingredientItem.appendChild(ingredientInput);
    ingredientItem.appendChild(quantityInput);
    ingredientsList.appendChild(ingredientItem);
});

const stepsList = document.getElementById("addStep");
stepsList.innerHTML = "";
recipe.steps.forEach((step) => {
    const newStepLi = document.createElement("li");

    const stepTextarea = document.createElement("textarea");
    stepTextarea.className =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5";
    stepTextarea.value = step;
    stepTextarea.required = true;

    newStepLi.appendChild(stepTextarea);
    stepsList.appendChild(newStepLi);
});

document.getElementById("addTime").value = recipe.time;
document.getElementById("addCookingTime").value = recipe.cookingTime || "";
document.getElementById("addPhoto").value = recipe.photo;

document.getElementById("addIngredientBtn").addEventListener("click", () => {
    const ingredientItem = document.createElement("li");
    ingredientItem.className =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5";

    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.placeholder = "Ingrédient";
    ingredientInput.required = true;

    const quantityInput = document.createElement("input");
    quantityInput.type = "text";
    quantityInput.placeholder = "Quantité";
    quantityInput.required = true;

    ingredientItem.appendChild(ingredientInput);
    ingredientItem.appendChild(quantityInput);
    ingredientsList.appendChild(ingredientItem);
});

document.getElementById("deleteIngredientBtn").addEventListener("click", () => {
    if (ingredientsList.children.length > 0) {
        ingredientsList.removeChild(ingredientsList.lastChild);
    }
});

document.getElementById("addStepBtn").addEventListener("click", () => {
    const newStepLi = document.createElement("li");

    const stepTextarea = document.createElement("textarea");
    stepTextarea.className =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5";
    stepTextarea.required = true;

    newStepLi.appendChild(stepTextarea);
    stepsList.appendChild(newStepLi);
});

document.getElementById("deleteStep").addEventListener("click", () => {
    if (stepsList.children.length > 0) {
        stepsList.removeChild(stepsList.lastChild);
    }
});

document.getElementById("addRecipeForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedRecipe = {
        id: parseInt(id),
        category: document.getElementById("categorySelect").value,
        title: document.getElementById("addTitle").value,
        ingredients: Array.from(ingredientsList.children).map((li) => ({
            ingredient: li.children[0].value,
            quantity: li.children[1].value,
        })),
        steps: Array.from(stepsList.children).map((li) => li.children[0].value),
        time: document.getElementById("addTime").value,
        cookingTime: document.getElementById("addCookingTime").value,
        photo: document.getElementById("addPhoto").value,
    };

    const index = recipes.findIndex((r) => r.id === parseInt(id));

    recipes[index] = updatedRecipe;
    if (confirm("Modifier la recette ?")) {
        localStorage.setItem("recipes", JSON.stringify(recipes));
        window.location.href = "index.html";
    }
});

// retour

backHome.addEventListener("click", () => {
    window.location.href = "index.html";
});
