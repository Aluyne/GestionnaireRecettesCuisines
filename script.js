const recipesList = document.getElementById("recipesList");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("categorySelect");
const logOut = document.getElementById("logOut");
const addRecipeBtn = document.getElementById("addRecipeBtn");

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
if (!isAdmin) {
    window.location.href = "login.html";
}

const displayRecipes = (recipes) => {
    recipesList.innerHTML = "";

    recipes.forEach((recipe) => {
        recipeItem = document.createElement("div");
        recipeItem.className =
            "recipe max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow";

        const photoImg = document.createElement("img");
        photoImg.src = recipe.photo;
        photoImg.alt = `${recipe.title} Photo`;
        photoImg.className = "rounded-t-lg mb-2";
        recipeItem.appendChild(photoImg);

        const titleLink = document.createElement("a");
        titleLink.textContent = recipe.title;
        titleLink.href = `details.html?id=${recipe.id}`;
        titleLink.className =
            "text-lg font-medium text-white hover:underline mb-3 p-5 block text-center";
        recipeItem.appendChild(titleLink);

        const timeInfo = document.createElement("p");
        timeInfo.textContent = `Temps de préparation: ${recipe.time}`;
        timeInfo.className = "text-gray-400 text-sm mb-3 px-5";
        recipeItem.appendChild(timeInfo);

        if (recipe.cookingTime) {
            const cookingTimeInfo = document.createElement("p");
            cookingTimeInfo.textContent = `Temps de cuisson: ${recipe.cookingTime}`;
            cookingTimeInfo.className = "text-gray-400 text-sm mb-3 px-5";
            recipeItem.appendChild(cookingTimeInfo);
        }

        recipesList.appendChild(recipeItem);
    });
};

// Recherche

const filterRecipes = () => {
    const search = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;

    const filteredRecipes = recipes.filter((recipe) => {
        const matchesTitle = recipe.title.toLowerCase().includes(search);
        const matchesCategory = category === "" || recipe.category === category;
        return matchesTitle && matchesCategory;
    });

    displayRecipes(filteredRecipes);

    if (filteredRecipes.length === 0) {
        const notFound = document.createElement("p");
        notFound.textContent = "Aucune recette trouvée";
        notFound.className = "text-bold text-xl p-4 text-center";
        recipesList.appendChild(notFound);
    }
};

searchInput.addEventListener("input", filterRecipes);
categorySelect.addEventListener("change", filterRecipes);

displayRecipes(recipes);
console.log(recipes);

// Btn AJouter

addRecipeBtn.addEventListener("click", () => {
    window.location.href = "admin.html";
});

// Btn Log Out

logOut.addEventListener("click", () => {
    localStorage.setItem("isAdmin", "false");
    window.location.href = "login.html";
});
