let worksArray = [];

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    worksArray = data;
  });

fetch("http://localhost:5678/api/categories")
  .then((response) => response.json())
  .then((dataCategories) => {
    const buttonContainer = document.getElementById("button_container");

    const figureContainer = document.getElementById("gallery");

    const buttons = dataCategories.map((category, index) => {
      const button = document.createElement("button");

      button.textContent = category.name;

      button.addEventListener("click", () => {
        const filteredImages = worksArray.filter(
          (work) => work.category.name == category.name
        );
        console.log(filteredImages);

        setActiveButton(index);

        figureContainer.innerHTML = "";

        filteredImages.forEach((item) => {
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

          let galleryDiv = document.getElementById("gallery");

          galleryDiv.appendChild(figure);
        });
      });

      buttonContainer.appendChild(button);

      return button;
    });
    const buttonTous = document.createElement("button");

    buttonTous.textContent = "Tous";

    buttonTous.addEventListener("click", () => {
      setActiveButton(-1);
      console.log(worksArray);

      figureContainer.innerHTML = "";

      worksArray.forEach((item) => {
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

        let galleryDiv = document.getElementById("gallery");

        galleryDiv.appendChild(figure);
      });
    });

    const firstButton = buttonContainer.firstChild;
    buttonContainer.insertBefore(buttonTous, firstButton);

    buttonTous.click();

    setActiveButton(-1);

    function setActiveButton(activeIndex) {
      buttons.forEach((button, index) => {
        if (index === activeIndex) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
      if (activeIndex === -1) {
        buttonTous.classList.add("active");
      } else {
        buttonTous.classList.remove("active");
      }
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
