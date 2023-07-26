const isConnected = checkToken();
console.log("🚀 ~ file: call_api.js:2 ~ isConnected:", isConnected);

onLaunch().then(({ categories, works }) => {
  // console.log("result", categories);
  // console.log("result 2", works);
  works.forEach((item) => createWorkElement(item));
  categories.unshift({ id: 0, name: "Tous" });
  const buttonContainer = document.getElementById("button_container");
  if (!isConnected) {
    categories.forEach((itemCat) => {
      let btn = createCategoryButton(itemCat);
      btn.addEventListener("click", () => {
        let selectedIdCat = getAndUpateCategory(event);
        let filteredWorks = filterWorksByCat(selectedIdCat, works);

        let targetHTML = document.getElementById("gallery");
        targetHTML.innerHTML = "";
        filteredWorks.forEach((item) => {
          createWorkElement(item);
        });
      });

      buttonContainer.appendChild(btn);
    });
  }

  // Ce qui a été fait :
  // Création des buttons en passant par la function createCategoryButton qui a pour but de générer le contenu html des buttons
  // avec l'ajout des data-id soit dataset.id ce qui permet donc de retourner le html puis de l'injecter.

  // La fonction getAndUpateCategory elle à pour but de renvoyer l'id de la catégorie et gérer l'ajout et la suppresion de class à l'evenement du clic sur les bouttons
  // Ainsi l'id de la catégorie récupérer nous utilisons la  fonction filterWorksByCat qui a pour but de filter et renvoyer un nouveau tableau qui correspond à l'id donné en parametre
});
