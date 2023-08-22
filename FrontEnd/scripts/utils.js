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

function createWorkElement(work, context = null) {
  if (!context) {
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

    targetHTML.append(figure);
  } else if (context === "modale") {
    let { title, imageUrl } = work;

    let figure = document.createElement("figure");
    let deleteItemBtn = document.createElement("span");

    let img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;

    let figcaption = document.createElement("figcaption");
    // NOTE On doit pouvoir supprimer un iten son nom n'est pas nécéssaire et pas demandé dans la maquette
    deleteItemBtn.textContent = 'Delete';

    figure.append(img);
    figcaption.append(deleteItemBtn);

    figure.append(figcaption);

    let targetHTML = document.getElementById("modal_gallery");

    targetHTML.append(figure);
    console.log("modale");
  }
}

function createCategoryButton(category) {
  const button = document.createElement("button");
  if (category.id === 0) {
    button.classList.add("active");
  }
  button.textContent = category.name;
  button.classList.add("btnJs");
  button.dataset.id = category.id;
  return button;
}

function getAndUpateCategory(ev) {
  let allBtn = document.querySelectorAll(".btnJs");
  allBtn.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.id === ev.target.dataset.id) {
      btn.classList.add("active");
    }
  });

  return ev.target.dataset.id;
}

function displayFilteredWorks(event) {
  let selectedIdCat = getAndUpateCategory(event);
  console.log(
    "🚀 ~ file: call_api.js:15 ~ btn.addEventListener ~ event:",
    event
  );
  let filteredWorks = filterWorksByCat(selectedIdCat, works);

  let targetHTML = document.getElementById("gallery");
  targetHTML.innerHTML = "";
  filteredWorks.forEach((item) => {
    createWorkElement(item);
  });
}

function filterWorksByCat(idCat, works) {
  let filteredWorks = [];
  if (Number(idCat) === 0) {
    filteredWorks = works;
  } else {
    filteredWorks = works.filter((el) => el.category.id === Number(idCat));
  }
  return filteredWorks;
}
