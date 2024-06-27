// Données admins dans localStorage

const admins = [
    { email: "admin1", password: "azerty" },
    { email: "admin2", password: "azerty" },
];

localStorage.setItem("admins", JSON.stringify(admins));

// Recette de base

const recipes = [
    {
        id: 1,
        category: "Plat",
        cookingTime: "5 min",
        ingredients: [
            { ingredient: "Œuf", quantity: "4" },
            { ingredient: "Tomates pelées en conserve", quantity: "2" },
            { ingredient: "Sel", quantity: "1 pincée" },
            { ingredient: "Poivre", quantity: "1 pincée" },
            { ingredient: "Huile d'olive", quantity: "1 cuillère à soupe" },
        ],
        photo: "https://www.mangerbouger.fr/manger-mieux/la-fabrique-a-menus/_next/image?url=https%3A%2F%2Fapi-prod-fam.mangerbouger.fr%2Fstorage%2Frecettes%2Foeufs-brouilles-tomate-epicee.jpg&w=1920&q=75",
        steps: [
            "Casser vos œufs dans un bol et fouettez-les en y mettant un peu de sel et de poivre.",
            "Coupez en cubes vos tomates pelées.",
            "Mettez une cuillère à soupe d’huile d’olive dans une poêle à feu moyen.",
            "À feu moyen/doux, versez les œufs ainsi que vos tomates et laissez cuire le mélange pendant 5 min.",
            "Versez votre préparation dans une assiette et dégustez !",
        ],
        time: "5 min",
        title: "Œufs brouillés à la tomate",
    },
    {
        id: 2,
        category: "Entrée",
        cookingTime: "",
        ingredients: [
            { ingredient: "Mozzarella", quantity: "1 boule" },
            { ingredient: "Tomate", quantity: "4" },
            { ingredient: "Basilic deshydraté", quantity: "2 pincées" },
            { ingredient: "Huile d'olive", quantity: "2 cuillères à soupe" },
            { ingredient: "Sel", quantity: "2 pincées" },
            { ingredient: "Poivre", quantity: "1 pincées" },
        ],
        photo: "https://www.mangerbouger.fr/manger-mieux/la-fabrique-a-menus/_next/image?url=https%3A%2F%2Fapi-prod-fam.mangerbouger.fr%2Fstorage%2Frecettes%2Fshutterstock_1726957057-tomates-a-la-mozzarella.jpg&w=1920&q=75",
        steps: [
            "Laver et couper les tomates en rondelles. Les répartir dans les assiettes.",
            "Couper la mozzarella en tranches et la disposer au milieu des tranches de tomates.",
            "Saler, poivrer et arroser d’un filet d’huile d’olive.",
            "Parsemer de basilic haché.",
        ],
        time: "5 min",
        title: "Tomates à la mozzarella",
    },
    {
        id: 3,
        category: "Dessert",
        cookingTime: "20 min",
        ingredients: [
            { ingredient: "Farine", quantity: "125 g" },
            { ingredient: "Œuf", quantity: "2" },
            {
                ingredient: "Huile de tournesol",
                quantity: "1/2 cuillère à soupe",
            },
            { ingredient: "Sel", quantity: "1 pincée" },
            { ingredient: "Lait demi-écrémé", quantity: "250 ml" },
        ],
        photo: "https://www.mangerbouger.fr/manger-mieux/la-fabrique-a-menus/_next/image?url=https%3A%2F%2Fapi-prod-fam.mangerbouger.fr%2Fstorage%2Frecettes%2Fshutterstock_558677326-crepes-maison.jpg&w=1920&q=75",
        steps: [
            "Mettre la farine dans une terrine.",
            "Creuser une fontaine, y mettre les œufs entiers et le sel.",
            "Délayer au fouet en ajoutant le lait par petites quantités, puis l’huile.",
            "Laisser reposer au moins 1 h.",
            "Au moment de faire cuire les crêpes, rallonger si besoin la pâte avec de l’eau tiède pour qu’aussitôt versée elle soit assez fluide pour recouvrir le fond de la poêle.",
            "Faire cuire 1 à 2 min de chaque côté.",
        ],
        time: "10 min",
        title: "Crêpes",
    },
    {
        id: 4,
        category: "Plat",
        cookingTime: "15 min",
        ingredients: [
            { ingredient: "Quinoa", quantity: "200 g" },
            { ingredient: "Germes de soja (conserve)", quantity: "150 g" },
            { ingredient: "Vinaigre de vin", quantity: "2 cuillères à soupe" },
            { ingredient: "Haricots verts fins frais", quantity: "200 g" },
            { ingredient: "Poivre", quantity: "2 pincées" },
            { ingredient: "Graines de sésame", quantity: "1 cuillère à soupe" },
            { ingredient: "Carotte", quantity: "2" },
            { ingredient: "Sucre en poudre", quantity: "2 cuillères à café" },
            { ingredient: "Sauce soja", quantity: "3 cuillères à soupe" },
        ],
        photo: "https://www.mangerbouger.fr/manger-mieux/la-fabrique-a-menus/_next/image?url=https%3A%2F%2Fapi-prod-fam.mangerbouger.fr%2Fstorage%2Frecettes%2Flegumes-sautes-a-la-japonaise.jpg&w=1920&q=75",
        steps: [
            "Laver les légumes.",
            "Ébouter les haricots verts, éplucher et couper les carottes en fins bâtonnets.",
            "Faire cuire les haricots verts, les bâtonnets de carottes et les germes de soja 10 min à la vapeur douce ou dans de l’eau bouillante salée (ils doivent rester légèrement croquants).",
            "Pendant ce temps, faire griller à sec quelques secondes les graines de sésame dans une poêle.",
            "Ôter les graines de sésame de la poêle et y faire chauffer la sauce de soja, le vinaigre et le sucre, jusqu’à ce que ce dernier soit bien fondu.",
            "Égoutter les légumes si nécessaire et les verser dans la poêle. Bien mélanger afin de les enrober de sauce et poivrer.",
            "Dans une casserole d'eau bouillante, verser le quinoa et le faire cuire le temps indiqué sur l'emballage. Egoutter le une fois cuit.",
            "Dresser dans un plat et parsemer de graines de sésame grillées.",
        ],
        time: "15 min",
        title: "Légumes sautés à la japonaise",
    },
    {
        id: 5,
        category: "Dessert",
        cookingTime: "20 min",
        ingredients: [
            { ingredient: "Œuf", quantity: "2" },
            { ingredient: "Sirop d'érable", quantity: "4 cuillères à café" },
            { ingredient: "Levure", quantity: "1/2 sachet" },
            { ingredient: "Yaourt nature", quantity: "1 pot" },
            { ingredient: "Huile d'olive", quantity: "2 cuillères à café" },
            { ingredient: "Groseille", quantity: "80 g" },
            { ingredient: "Noix", quantity: "25 g" },
            { ingredient: "Farine", quantity: "100 g" },
            { ingredient: "Sel", quantity: "1 pincée" },
        ],
        photo: "https://www.mangerbouger.fr/manger-mieux/la-fabrique-a-menus/_next/image?url=https%3A%2F%2Fapi-prod-fam.mangerbouger.fr%2Fstorage%2Frecettes%2F35672-Muffins-aux-groseilles-maison.png&w=1920&q=75",
        steps: [
            "Préchauffer le four à 180 °C (th. 6).",
            "Mélanger la farine, la levure et le sel puis tamiser le tout.",
            "Battre les œufs avec le sirop d’érable, l’huile et le yaourt, puis incorporer la farine tamisée par petites quantités. Ajouter les noix et les groseilles.",
            "Graisser des moules à muffins et les remplir aux 2/3 avec la pâte. Enfourner pour 20 min environ.",
        ],
        time: "15 min",
        title: "Muffins aux groseilles",
    },
    {
        id: 6,
        category: "Entrée",
        cookingTime: "10 min",
        ingredients: [
            { ingredient: "Carotte", quantity: "4" },
            { ingredient: "Sel", quantity: "1 pincée" },
            { ingredient: "Vinaigre de vin", quantity: "1 cuillère à café" },
            { ingredient: "Pomme", quantity: "1" },
            { ingredient: "Poivre", quantity: "1 pincée" },
            { ingredient: "Huile d'olive", quantity: "2 cuillères à soupe" },
            {
                ingredient: "Citron (pour le jus)",
                quantity: "2 cuillères à soupe",
            },
            { ingredient: "Noix", quantity: "3" },
        ],
        photo: "https://www.mangerbouger.fr/manger-mieux/la-fabrique-a-menus/_next/image?url=https%3A%2F%2Fapi-prod-fam.mangerbouger.fr%2Fstorage%2Frecettes%2F20949-Petite-salade-de-carottes-et-pommes.jpg&w=1920&q=75",
        steps: [
            "Éplucher et laver les carottes et la pomme.",
            "Les râper finement, les déposer dans un saladier et arroser le tout de jus de citron.",
            "Préparer la sauce : verser le vinaigre dans un bol et délayer avec le sel et le poivre. Ajouter l’huile et fouetter.",
            "Casser, décortiquer et concasser les noix.",
            "Verser la sauce dans le saladier, mélanger, parsemer de noix concassées et servir.",
        ],
        time: "10 min",
        title: "Salade de carottes et pommes",
    },
];

localStorage.setItem("recipes", JSON.stringify(recipes));

// Connexion admin

const loginAcces = document.getElementById("loginAcces");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const admins = JSON.parse(localStorage.getItem("admins"));

    const admin = admins.find(
        (admin) => admin.email === email && admin.password === password
    );

    if (admin) {
        localStorage.setItem("isAdmin", "true");
        window.location.href = "index.html";
    } else {
        const alertLog = document.getElementById("alertLog");
        if (!alertLog) {
            const alertLog = document.createElement("p");
            alertLog.id = "alertLog";
            alertLog.textContent = "Accés refusé";
            alertLog.className = "text-red-500 text-center p-5";
            loginForm.appendChild(alertLog);
        }
    }
});
