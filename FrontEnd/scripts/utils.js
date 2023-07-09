function displayWorks(target) {
  getWorks().then((data) => {
    data.forEach((item) => {
      const title = item.title;
      const imageUrl = item.imageUrl;

      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = title;

      const figcaption = document.createElement("figcaption");
      figcaption.textContent = title;

      figure.appendChild(img);

      figure.appendChild(figcaption);

      const targetHTML = document.getElementById(target);

      targetHTML.appendChild(figure);
    });
    return data;
  });
}

const getData = async (url) => {
  const response = await (await fetch(url)).json();
  return response;
  //encapsuler dans un try catch
};

//méthode init qui initialise le site, donc doit récupérer categories et works

function onLaunch() {
  getCategories();
  getWorks();
}

function getWorks() {
  return getData("http://localhost:5678/api/works");
}

function getCategories() {
  return getData("http://localhost:5678/api/categories");
}

function createCategoryButton(category) {
  const buttonContainer = document.getElementById("button_container");
    const button = document.createElement("button");

    button.textContent = category.name;
}

function createWorkElement(work) {
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

  let targetHTML = document.getElementById("gallery");

  targetHTML.appendChild(figure);
}
