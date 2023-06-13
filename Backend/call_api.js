function refresh(event) {

  let worksArray = [];

  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      worksArray = data;
      
      const selected_button = document.querySelector('input[name="work_type"]:checked');

      let galleryDiv = document.querySelector('.gallery');
      while (galleryDiv.firstChild) {
        galleryDiv.removeChild(galleryDiv.firstChild);
      }

      for (let item of worksArray) {

        if (selected_button.value != item.category.name
          && selected_button.value != 'Tous') {
          continue
        }

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

  radioButtons.forEach(radio => {
    radio.addEventListener("click", refresh);
  });

});