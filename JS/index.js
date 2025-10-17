/* ----------------------------
   FONCTIONS NUTRIMAROC
-----------------------------*/

// Défilement vers la section Recettes (Accueil)
function defilerVersRecettes() {
  const section = document.querySelector("#section-recettes");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Animation au survol des cartes
const cards = document.querySelectorAll(".recette__card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => card.classList.add("shadow-lg"));
  card.addEventListener("mouseleave", () => card.classList.remove("shadow-lg"));
});

// Navbar fond blanc après défilement
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("bg-white", window.scrollY > 50);
  }
});

// Ajouter dynamiquement des recettes
const boutonAjout = document.getElementById("ajouterRecettes");
if (boutonAjout) {
  boutonAjout.addEventListener("click", afficherPlusRecettes);
}

function afficherPlusRecettes() {
  const liste = document.getElementById("liste-recettes");
  if (!liste) return;

  const recettes = [
    { img: "img/couscous.jpg", titre: "Couscous aux légumes", texte: "Un plat complet et équilibré, typiquement marocain." },
    { img: "img/pastilla.jpg", titre: "Pastilla au poulet", texte: "Un mélange sucré-salé irrésistible." },
    { img: "img/tagine.jpg", titre: "Tajine kefta & œufs", texte: "Des boulettes de viande dans une sauce tomate épicée." },
  ];

  recettes.forEach(r => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card recette__card">
        <img src="${r.img}" class="card-img-top" alt="${r.titre}">
        <div class="card-body">
          <h5 class="card-title">${r.titre}</h5>
          <p class="card-text">${r.texte}</p>
        </div>
      </div>`;
    liste.appendChild(col);
  });

  boutonAjout.disabled = true;
  boutonAjout.textContent = "Toutes les recettes sont affichées 🍴";
}

// formulaire de contact
const form = document.getElementById("formContact");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!nom || !email || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    document.getElementById("confirmation").innerHTML =
      `<div class="alert alert-success mt-3">Merci ${nom}, votre message a été envoyé avec succès !</div>`;
    form.reset();
  });
}

document.getElementById("formContact").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("confirmation").innerHTML = `
    <div class="alert alert-success mt-3">
      Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
    </div>
  `;

  this.reset();
});

