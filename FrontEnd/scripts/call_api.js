// function refresh(event) {

//   let worksArray = [];

//   fetch('http://localhost:5678/api/works')
//     .then(response => response.json())
//     .then(data => {
//       worksArray = data;
      
//       const selected_button = document.querySelector('input[name="work_type"]:checked');

//       let galleryDiv = document.querySelector('.gallery');
//       while (galleryDiv.firstChild) {
//         galleryDiv.removeChild(galleryDiv.firstChild);
//       }

//       for (let item of worksArray) {

//         if (selected_button.value != item.category.name
//           && selected_button.value != 'Tous') {
//           continue
//         }

//         let title = item.title;
//         let imageUrl = item.imageUrl;

//         let figure = document.createElement("figure");

//         let img = document.createElement("img");
//         img.src = imageUrl;
//         img.alt = title;
 
//         let figcaption = document.createElement("figcaption");
//         figcaption.textContent = title;

//         figure.appendChild(img);

//         figure.appendChild(figcaption);

//         galleryDiv.appendChild(figure);

//       };
//     })
//     .catch(error => {
//       console.log('Une erreur s\'est produite :', error);
//     });

// }

// refresh()

// document.addEventListener('DOMContentLoaded', () => {
//   const radioButtons = document.querySelectorAll('input[type="radio"][name="work_type"]');

//   radioButtons.forEach(radio => {
//     radio.addEventListener("click", refresh);
//   });

// });

// Partie 2

let worksArray = [];

fetch('http://localhost:5678/api/works')
.then(response => response.json())
    .then(data => {
      worksArray = data;
    })


fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(dataCategories => {
    // Get the container element where you want to append the buttons
    const buttonContainer = document.getElementById('button_container');
    
    // Get the image container element
    const figureContainer = document.getElementById('gallery');

    // Use map to create buttons for each filter option
    const buttons = dataCategories.map(category => {
      // Create a button element
      const button = document.createElement('button');

      // Set the button text to the filter option name
      button.textContent = category.name;

      // Add a click event listener to handle the button click
      button.addEventListener('click', () => {
        // Filter the images based on the selected category
        const filteredImages = worksArray.filter(work => work.category.name == category.name);
        console.log(filteredImages);

        // Clear the image container
        figureContainer.innerHTML = '';

        // Create and append the image elements to the container
        filteredImages.forEach(item => {
          let title = item.title;
        let imageUrl = item.imageUrl;

        let figure = document.createElement("figure");

        let img = document.createElement("img");
        img.src = imageUrl;
        img.alt = title;
 
        let figcaption = document.createElement("figcaption");
        figcaption.textContent = title;

        figure.appendChild(img);

        figure.appendChild(figcaption);

        let galleryDiv = document.getElementById('gallery');

        galleryDiv.appendChild(figure);

        });
      });

      // Append the button to the container
      buttonContainer.appendChild(button);

      // Return the button element
      return button;
    });
    const buttonTous = document.createElement('button');

    // Set the button text to the filter option name
    buttonTous.textContent = "Tous";

    // Add a click event listener to handle the button click
    buttonTous.addEventListener('click', () => {

      console.log(worksArray);

      // Clear the image container
      figureContainer.innerHTML = '';

      // Create and append the image elements to the container
      worksArray.forEach(item => {
        let title = item.title;
      let imageUrl = item.imageUrl;

      let figure = document.createElement("figure");

      let img = document.createElement("img");
      img.src = imageUrl;
      img.alt = title;

      let figcaption = document.createElement("figcaption");
      figcaption.textContent = title;

      figure.appendChild(img);

      figure.appendChild(figcaption);

      let galleryDiv = document.getElementById('gallery');

      galleryDiv.appendChild(figure);

      });
    });

    // Append the button to the container
    buttonContainer.appendChild(buttonTous);
    buttons.push(buttonTous)
  })
  .catch(error => {
    console.error('Error:', error);
  });
