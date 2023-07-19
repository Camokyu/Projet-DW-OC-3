const getData = async (url) => {
  const response = await (await fetch(url)).json();
  return response;
  //encapsuler dans un try catch
};

async function onLaunch() {
  const categories = await getCategories();
  const works = await getWorks();
  return { categories, works };
}

function getWorks() {
  return getData("http://localhost:5678/api/works");
}

function getCategories() {
  return getData("http://localhost:5678/api/categories");
}

function createWorkElement(work) {
  let { title, imageUrl } = work;

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

function createCategoryButton(category) {
  const buttonContainer = document.getElementById("button_container");
  const button = document.createElement("button");

  button.textContent = category.name;
  buttonContainer.appendChild(button);
}
