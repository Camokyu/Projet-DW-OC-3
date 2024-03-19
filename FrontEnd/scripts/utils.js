// Login page

const loginButton = document.getElementById("login_button");
const logoutButton = document.getElementById("logout_button");

logoutButton.addEventListener("click", logout);

// Main page

const editModeBanner = document.getElementById("edit_mode_banner");
const modalTrigger = document.getElementById("modal_trigger");

modalTrigger.addEventListener("click", openModal);

// Modal

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalClose = document.getElementById("modal_close_icon");
const modalPreviousIcon = document.getElementById("modal_previous_icon");
const modalFormContainer = document.getElementById("modal_form_container");
const modalForm = document.getElementById("modal_form");
const openFormButton = document.getElementById("open_form_button");
const formTitle = document.getElementById("modal_form_title");
const formInputSelectedImage = document.getElementById(
  "form_file_input_selected_image"
);
const formFileInputControls = document.getElementById(
  "form_file_input_controls"
);
const formFileInput = document.getElementById("form_file_input");
//const submitFormButton = document.getElementById("submit_form_button");
const modalGalleryTitle = document.getElementById("modal_gallery_title");
const modalGallery = document.getElementById("modal_gallery");
const inputFile = document.getElementById("form_file_input");
const inputTitle = document.getElementById("form_title_input");
const formSelect = document.getElementById("form_category_select");
let fileInputCheck = false;
let titleInputCheck = false;
let formSelectCheck = false;
let  submitFormButton = document.getElementById("submit_form_button").disabled = true; 

inputFile.addEventListener("input", function (e) {
  const fileError = document.getElementById("input_file_error");
  let fileWeight = this.files[0].size;
  console.log(
    "🚀 ~ file: utils.js:38 ~ inputFile.addEventListener ~ this.files:",
    this.files
  );
  if (fileWeight <= 4000000) {
    fileInputCheck = true;
    fileError.innerHTML = "";
  } else {
    fileInputCheck = false;
    fileError.innerHTML = "Type de fichier incorrect ou fichier trop lourd";
  }
});

inputTitle.addEventListener("input", () => {
  let titleSize = inputTitle.value.length;
  titleSize > 1 ? (titleInputCheck = true) : (titleInputCheck = false);
});

formSelect.addEventListener("change", (e) => {
  let idSelectedCategory = e.target.value;
  console.log(
    "🚀 ~ file: utils.js:62 ~ formSelect.addEventListener ~ idSelectedCategory:",
    idSelectedCategory
  );
  idSelectedCategory != 0
    ? (formSelectCheck = true)
    : (formSelectCheck = false);
});

submitFormButton.addEventListener("click", function () {
  if (fileInputCheck & titleInputCheck & formSelectCheck) {
    submitForm();
    console.log("POST executé !");
  } else {
    console.log("message d'erreur");
  }
});

// Event initializers

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
modalPreviousIcon.addEventListener("click", () => {
  setIsFormDisplayed(false);
});
openFormButton.addEventListener("click", () => {
  setIsFormDisplayed(true);
});
formInputSelectedImage.addEventListener("click", () => formFileInput.click());
formFileInput.addEventListener("change", displaySelectedImage);
console.log("🚀 ~ submitFormButton:", submitFormButton);
submitFormButton.addEventListener("click", () => {
  console.log("Vérif", inputFile.value, inputTitle.value, formSelect.value);
  console.log("Check inputFile", fileInputCheck);
  console.log("Check inputTitle", titleInputCheck);
  console.log("Check inputFile", fileInputCheck);
});

// API utils

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

function postWork(formData) {
  console.log("🚀 ~ postWork ~ formData:", formData);
  return fetch("http://localhost:5678/api/works", {
    body: formData,
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
    method: "POST",
  });
}

async function deleteWork(workId) {
  console.log("🚀 ~ deleteWork ~ workId:", workId);
  await fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
      Authorization: "JWT " + getAuthToken(),
    },
  });

  const figuresToDelete = document.querySelectorAll(
    `figure[data-id="${workId}"]`
  );

  console.log("🚀 ~ deleteWork ~ figuresToDelete:", figuresToDelete);
  figuresToDelete.forEach((figure) => {
    figure.style.display = "none";
  });
}

async function submitForm() {
  console.log(modalForm, "log modalForm");
  const formData = new FormData(modalForm);

  console.log("Je suis passé ! ^-^");
  const response = await postWork(formData);

  if (response.ok) {
    resetForm();
    closeModal();
    const works = await getWorks();
    createWorkElements(works);
  } else {
    // Gérer cas d'erreur
    console.log("Une erreur s'est produite ou une saisie est incorrecte !");
  }
}

function resetForm() {
  modalForm.reset();
  displaySelectedImage();
}

// Login utils

function logout() {
  removeAuthToken();
}

// DOM manipulation utils

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";

  setIsFormDisplayed(false);

  resetForm();
}

function openModal() {
  modal.style.display = "flex";
  overlay.style.display = "block";
}

function setIsFormDisplayed(isDisplayed) {
  const formDisplayValue = isDisplayed ? "block" : "none";

  modalFormContainer.style.display = formDisplayValue;
  modalPreviousIcon.style.display = formDisplayValue;
  formTitle.style.display = formDisplayValue;
  submitFormButton.style.display = formDisplayValue;

  const galleryDisplayBlockValue = !isDisplayed ? "block" : "none";
  const galleryDisplayGridValue = !isDisplayed ? "grid" : "none";

  openFormButton.style.display = galleryDisplayBlockValue;
  modalGalleryTitle.style.display = galleryDisplayBlockValue;
  modalGallery.style.display = galleryDisplayGridValue;
}

function displaySelectedImage() {
  const file = formFileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      formInputSelectedImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
    formFileInputControls.style.display = "none";
    formInputSelectedImage.style.display = "block";
  } else {
    formFileInputControls.style.display = "flex";
    formInputSelectedImage.style.display = "none";
  }
}

function createWorkElements(works) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const modalGallery = document.getElementById("modal_gallery");
  modalGallery.innerHTML = "";

  works.forEach((item) => createWorkElement(item));
}

function createWorkElement(work) {
  const { title, imageUrl } = work;

  const figure = document.createElement("figure");
  const modalFigure = figure.cloneNode();
  figure.dataset.id = work.id;
  modalFigure.dataset.id = work.id;
  const img = document.createElement("img");
  img.alt = title;
  img.src = imageUrl;
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = title;
  const deleteItemIcon = document.createElement("img");
  deleteItemIcon.className = "delete-icon";
  deleteItemIcon.src = "./assets/icons/delete_icon.png";
  deleteItemIcon.onclick = async (e) => {
    e.preventDefault();
    await deleteWork(work.id);
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

// Creation of options for the form's select

function createCategoryFormOption(category) {
  const option = document.createElement("option");

  option.value = category.id;
  option.innerText = category.name;

  const formSelect = document.querySelector("#form_category_select");
  formSelect.append(option);
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
