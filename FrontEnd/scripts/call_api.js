// const isConnected = getIsConnected();
// console.log("🚀 ~ file: call_api.js:2 ~ isConnected:", isConnected);
const bannerContainer = document.getElementById("banner_container");

onLaunch().then(({ categories, works }) => {
  window.works = works;
  createWorkElements(works);
  categories.unshift({ id: 0, name: "Tous" });
  const buttonContainer = document.getElementById("button_container");
  if (!getIsConnected()) {
    categories.forEach((itemCat) => {
      let btn = createCategoryButton(itemCat);
      btn.addEventListener("click", displayFilteredWorks);

      buttonContainer.appendChild(btn);
    });
  }
});