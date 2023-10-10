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

function createWorkElements(works) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ''
  
  const modalGallery = document.getElementById("modal_gallery");
  modalGallery.innerHTML = ''
  
  works.forEach((item) => createWorkElement(item));
}

function createWorkElement(work) {
  const { title, imageUrl } = work;

  const figure = document.createElement("figure");
  const modalFigure = figure.cloneNode();
  const img = document.createElement("img");
  img.alt = title
  img.src = imageUrl
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = title
  const deleteItemIcon = document.createElement("img");
  deleteItemIcon.className = 'edit-icon';
  deleteItemIcon.src = './assets/icons/delete_icon.png';
  deleteItemIcon.onclick = (e) => {
    e.preventDefault();
    deleteWork(work.id);
  };

  const gallery = document.getElementById("gallery");
  const modalGallery = document.getElementById("modal_gallery");

  figure.append(img);
  figure.append(figcaption);
  modalFigure.append(img.cloneNode());
  modalFigure.append(deleteItemIcon);
  
  gallery.append(figure);
  modalGallery.append(modalFigure);
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
  const allBtn = document.querySelectorAll(".btnJs");
  allBtn.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.id === ev.target.dataset.id) {
      btn.classList.add("active");
    }
  });

  return ev.target.dataset.id;
}

function displayFilteredWorks(event) {
  const selectedIdCat = getAndUpateCategory(event);
  console.log(
    "🚀 ~ file: call_api.js:15 ~ btn.addEventListener ~ event:",
    event
  );
  const filteredWorks = filterWorksByCat(selectedIdCat, works);

  const targetHTML = document.getElementById("gallery");
  targetHTML.innerHTML = "";
  filteredWorks.forEach((item) => {
    createWorkElement(item);
  });
}

function filterWorksByCat(idCat, works) {
  return Number(idCat) === 0
    ? [...works]
    : works.filter((el) => el.category.id === Number(idCat));
}

async function deleteWork(workId){
  await fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
      "Authorization": "JWT " + getAuthToken()
    }
  })

  const works = await getWorks();
  createWorkElements(works)
}
