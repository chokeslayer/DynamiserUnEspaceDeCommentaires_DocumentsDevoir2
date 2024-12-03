// Sélection des éléments du DOM
const form = document.querySelector("form");
const commentList = document.getElementById("comment-list");
const errorMessage = document.getElementById("error-message");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const messageInput = document.getElementById("message");

// Fonction pour ajouter un commentaire
function addComment(firstName, lastName, message) {
  const commentDiv = document.createElement("div");
  commentDiv.className = "flex space-x-4 text-sm text-gray-500";
  commentDiv.innerHTML = `
    <div class="flex-1 py-10 border-t border-gray-200">
      <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
      <div class="prose prose-sm mt-4 max-w-none text-gray-500">
        <p>${message}</p>
      </div>
    </div>
  `;
  commentList.appendChild(commentDiv);
}

// Événement sur la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Vérifie que tous les champs sont remplis
  if (!firstNameInput.value || !lastNameInput.value || !messageInput.value) {
    errorMessage.style.display = "block"; // Affiche le message d'erreur
    return;
  }

  // Cache le message d'erreur si tous les champs sont remplis
  errorMessage.style.display = "none";

  // Ajoute le commentaire dans la liste
  addComment(firstNameInput.value, lastNameInput.value, messageInput.value);

  // Réinitialise les champs du formulaire
  firstNameInput.value = "";
  lastNameInput.value = "";
  messageInput.value = "";
});
