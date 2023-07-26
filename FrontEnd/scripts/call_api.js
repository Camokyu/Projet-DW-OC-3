const isConnected = checkToken();
console.log("🚀 ~ file: call_api.js:2 ~ isConnected:", isConnected);

onLaunch().then(({ categories, works }) => {
  console.log("result", categories);
  console.log("result 2", works);
  works.forEach((item) => {
    createWorkElement(item);
    console.log("🚀 ~ file: call_api.js:9 ~ works.forEach ~ work:", item)
  });
  categories.unshift({ id: 0, name: "Tous" });
  console.log("result after", categories);
  categories.forEach((itemCat) => createCategoryButton(itemCat));
  //display des boutons (ajouter dans cette fonction de display un eventListener qui récupère l'ID du bouton et appeler une fonction qui filtre- cette partie
  //filtre est une fonction filter qui sera initialisée plus bas et qui prendra en paramètres l'ID du bouton cliqué et la liste des travaux aka allWorks, sont résultat doit
  //être stocké car utilisé par display au-dessus, note : si ID = 0 alors display allWorks et si ID != 0 alors filter- filter donne un nouveau tableau de ce qui doit être affiché
  // et on reprend donc les lignes 7 à 9 APRES avoir vidé le contenu déjà présent dans la gallery via une fonction ci-dessous :
  let targetHTML = document.getElementById("gallery");
  // targetHTML.innerHTML = ""; //à couper-coller en première ligne dans la fonction filter
});


