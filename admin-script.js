const addRecipeForm = document.getElementById("addRecipeForm");
const addIngredientBtn = document.getElementById("addIngredientBtn");
const deleteIngredientBtn = document.getElementById("deleteIngredientBtn");
const addStepBtn = document.getElementById("addStepBtn");
const deleteStepBtn = document.getElementById("deleteStep");
const addStepList = document.getElementById("addStep");
const backHome = document.getElementById("backHome");

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Ajout nouvelle recette

addRecipeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = generateID();
    console.log(id);

    const category = document.getElementById("categorySelect").value;
    const title = document.getElementById("addTitle").value;
    const ingredientsList = document.querySelectorAll("#addIngredientsList li");
    const ingredients = [];
    ingredientsList.forEach((li) => {
        const inputs = li.querySelectorAll("input[type='text']");
        ingredients.push({
            ingredient: inputs[0].value,
            quantity: inputs[1].value,
        });
    });
    const stepElements = document.querySelectorAll("#addStep li textarea");
    const steps = Array.from(stepElements).map((step) => step.value);

    const time = document.getElementById("addTime").value;
    const cookingTime = document.getElementById("addCookingTime").value;
    const photo = document.getElementById("addPhoto").value;

    const newRecipe = {
        id,
        category,
        title,
        ingredients,
        steps,
        time,
        cookingTime,
        photo,
    };

    recipes.push(newRecipe);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    addRecipeForm.reset();
    confirm("Recette Ajouté !");
});

// ajouter ingredient

addIngredientBtn.addEventListener("click", () => {
    const ingredientsList = document.getElementById("addIngredientsList");

    const newIngredientLi = document.createElement("li");
    newIngredientLi.setAttribute("required", true);
    newIngredientLi.className =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5";

    newIngredientLi.innerHTML = `
                <input type="text" placeholder="Ingrédient" required />
                <input type="text" placeholder="Quantité" required />
            `;

    ingredientsList.appendChild(newIngredientLi);
});

//supprimer ingredient

deleteIngredientBtn.addEventListener("click", () => {
    const ingredientsList = document.getElementById("addIngredientsList");
    const lastIngredient = ingredientsList.lastElementChild;

    if (lastIngredient) {
        ingredientsList.removeChild(lastIngredient);
    }
});

//ajouter une etape

addStepBtn.addEventListener("click", () => {
    const newStepLi = document.createElement("li");
    const newTextArea = document.createElement("textarea");
    newTextAreaclassName =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5";
    newTextArea.setAttribute("required", true);

    newStepLi.appendChild(newTextArea);
    addStepList.appendChild(newStepLi);
});

// supprimer un etape

deleteStepBtn.addEventListener("click", () => {
    const lastStep = addStepList.lastElementChild;

    if (lastStep) {
        addStepList.removeChild(lastStep);
    }
});

// btn retour

backHome.addEventListener("click", () => {
    window.location.href = "index.html";
});

// Génération new ID

const generateID = () => {
    let newId = 0;
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id > newId) {
            newId = recipes[i].id;
        }
    }
    return newId;
};
