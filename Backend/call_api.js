function refresh(event) {

  let worksArray = [];

  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      worksArray = data;
      // Get the button element
      const selected_button = document.querySelector('input[name="work_type"]:checked');

      // Get the <div> element with the class "gallery"
      let galleryDiv = document.querySelector('.gallery');
      while (galleryDiv.firstChild) {
        galleryDiv.removeChild(galleryDiv.firstChild);
      }

      for (let item of worksArray) {
        // console.log("item category:", item.category.name);
        // console.log("buton val:", selected_button.value);

        if (selected_button.value != item.category.name
          && selected_button.value != 'Tous') {
          continue
        }


        let title = item.title;
        let imageUrl = item.imageUrl;
        // console.log("Title:", title);
        // console.log("Image URL:", imageUrl);

        // Create the <figure> element
        let figure = document.createElement("figure");

        // Create the <img> element
        let img = document.createElement("img");
        img.src = imageUrl;
        img.alt = title;

        // Create the <figcaption> element
        let figcaption = document.createElement("figcaption");
        figcaption.textContent = title;

        // Append the <img> element to the <figure> element
        figure.appendChild(img);

        // Append the <figcaption> element to the <figure> element
        figure.appendChild(figcaption);

        // Append the <figure> element to the <div> element
        galleryDiv.appendChild(figure);

      };
    })
    .catch(error => {
      console.log('Une erreur s\'est produite :', error);
    });

}

refresh()

document.addEventListener('DOMContentLoaded', () => {
  const radioButtons = document.querySelectorAll('input[type="radio"][name="work_type"]');

  // console.log(radioButtons);
  radioButtons.forEach(radio => {
    radio.addEventListener("click", refresh);
  });

});