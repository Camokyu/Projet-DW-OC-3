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

function getWorks() {
  return getData("http://localhost:5678/api/works");
}
