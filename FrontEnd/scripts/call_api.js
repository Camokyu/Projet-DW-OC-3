const isConnected = checkToken();
console.log("🚀 ~ file: call_api.js:2 ~ isConnected:", isConnected);
const bannerContainer = document.getElementById("banner_container");

onLaunch().then(({ categories, works }) => {
  window.works = works;
  works.forEach((item) => createWorkElement(item));
  categories.unshift({ id: 0, name: "Tous" });
  const buttonContainer = document.getElementById("button_container");
  if (!isConnected) {
    categories.forEach((itemCat) => {
      let btn = createCategoryButton(itemCat);
      btn.addEventListener("click", displayFilteredWorks);

      buttonContainer.appendChild(btn);
    });
  }
});

if (isConnected) {
  bannerContainer.style.display = "block";
}
