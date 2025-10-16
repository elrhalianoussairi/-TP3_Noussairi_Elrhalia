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

