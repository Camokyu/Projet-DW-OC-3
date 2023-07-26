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

  figure.append(img);

  figure.append(figcaption);

  let targetHTML = document.getElementById("gallery");
  console.log(
    "🚀 ~ file: utils.js:38 ~ createWorkElement ~ targetHTML:",
    targetHTML
  );

  targetHTML.append(figure);
}

function createCategoryButton(category) {
  const buttonContainer = document.getElementById("button_container");
  const button = document.createElement("button");
  if (category.id === 0) {
    button.classList.add("active");
  }
  button.addEventListener("click", () => selectCategory(category.id));
  button.textContent = category.name;
  buttonContainer.appendChild(button);
}

function selectCategory(id){
  console.log("🚀 ~ file: utils.js:58 ~ selectCategory ~ id:", id)
  //piste possible : dataset
}