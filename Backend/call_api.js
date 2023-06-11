let worksArray = [];

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    worksArray = data;
    for (let i = 0; i < worksArray.length; i++) {
        const title = item.title;
        const imageUrl = item.imageUrl;
        console.log("Title:", title);
        console.log("Image URL:", imageUrl);
    }
  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error);
  });
