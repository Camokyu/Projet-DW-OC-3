const isConnected = checkToken();
console.log("🚀 ~ file: call_api.js:2 ~ isConnected:", isConnected);

onLaunch().then(({ categories, works }) => {
  console.log("result", categories);
  console.log("result 2", works);
  works.forEach((work) => {
    createWorkElement(work);
  });
  categories.unshift({ id: 0, name: "Tous" });
  console.log("result after", categories);
  //display des boutons (ajouter dans cette fonction de display un eventListener qui récupère l'ID du bouton et appeler une fonction qui filtre- cette partie
  //filtre est une fonction filter qui sera initialisée plus bas et qui prendra en paramètres l'ID du bouton cliqué et la liste des travaux aka allWorks, sont résultat doit
  //être stocké car utilisé par display au-dessus, note : si ID = 0 alors display allWorks et si ID != 0 alors filter- filter donne un nouveau tableau de ce qui doit être affiché
  // et on reprend donc les lignes 7 à 9 APRES avoir vidé le contenu déjà présent dans la gallery via une fonction ci-dessous :
  let targetHTML = document.getElementById("gallery");
  targetHTML.innerHTML = ""; //à couper-coller en première ligne dans la fonction filter
});

// getData("http://localhost:5678/api/works").then((data) => {
//   if (!isConnected) {
//     getData("http://localhost:5678/api/categories")
//       .then((dataCategories) => {
//         let worksArray;
//         worksArray = data;
//         console.log("worksArray", worksArray);
//         const buttonContainer = document.getElementById("button_container");

//         const figureContainer = document.getElementById("gallery");

//         const buttons = dataCategories.map((category, index) => {
//           const button = document.createElement("button");

//           button.textContent = category.name;

//           button.addEventListener("click", () => {
//             const filteredImages = worksArray.filter(
//               (work) => work.category.name == category.name
//             );
//             console.log(filteredImages);

//             setActiveButton(index);

//             figureContainer.innerHTML = "";

//             filteredImages.forEach((item) => {
//               let title = item.title;
//               let imageUrl = item.imageUrl;

//               let figure = document.createElement("figure");

//               let img = document.createElement("img");
//               img.src = imageUrl;
//               img.alt = title;

//               let figcaption = document.createElement("figcaption");
//               figcaption.textContent = title;

//               figure.appendChild(img);

//               figure.appendChild(figcaption);

//               let targetHTML = document.getElementById("gallery");

//               targetHTML.appendChild(figure);
//             });
//           });

//           buttonContainer.appendChild(button);

//           return button;
//         });

//         const buttonTous = document.createElement("button");

//         buttonTous.textContent = "Tous";

//         buttonTous.addEventListener("click", () => {
//           displayWorks("gallery");

//           figureContainer.innerHTML = "";
//           setActiveButton(-1);
//         });

//         const firstButton = buttonContainer.firstChild;
//         buttonContainer.insertBefore(buttonTous, firstButton);

//         worksArray = displayWorks("gallery");
//         console.log("travaux :", worksArray);

//         function setActiveButton(activeIndex) {
//           buttons.forEach((button, index) => {
//             if (index === activeIndex) {
//               button.classList.add("active");
//             } else {
//               button.classList.remove("active");
//             }
//           });
//           if (activeIndex === -1) {
//             buttonTous.classList.add("active");
//           } else {
//             buttonTous.classList.remove("active");
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   } else {
//     const worksArray = displayWorks("gallery");
//     console.log("travaux :", worksArray);
//     //gestion logout, boutons Modifier, bandeau mode édition en haut
//   }
// });
