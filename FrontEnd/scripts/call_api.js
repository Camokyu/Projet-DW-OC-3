// const isConnected = getIsConnected();
// console.log("🚀 ~ file: call_api.js:2 ~ isConnected:", isConnected);
const bannerContainer = document.getElementById("banner_container");

onLaunch().then(({ categories, works }) => {
  window.works = works;
  createWorkElements(works);
  
  if (!getIsConnected()) {
    const buttonContainer = document.getElementById("button_container");
    categories.unshift({ id: 0, name: "Tous" });
    categories.forEach((itemCat) => {
      const btn = createCategoryButton(itemCat);
      btn.addEventListener("click", displayFilteredWorks);

      buttonContainer.appendChild(btn);
    });
  } else {
    categories.forEach((itemCat) => {
      createCategoryFormOption(itemCat)
    })
  }
});