import "../styles/style.scss";
const url = "https://app-mural.herokuapp.com/mural";
const card = require("./card");

card.cardCreate(
  {
    title: "Parabéns!!",
    message:
      "PARABÉNSSS! Você é mt mesmo, espero que seja sempre felizzz! Uma pessoa simplesmente muito foda!! \n <3 <3 <3",
    author: "Pedro",
    to: "Matheus",
  },
  0
);

card.cardFilter();

let data = fetch(url)
  .then((response) => {
      return response.json();
  })
  .then();

data.then((posts) => {
  document.getElementById('add-icon').removeAttribute('hidden')
  document
  .getElementById("loader")
  .parentNode.removeChild(document.getElementById("loader"));
  
  if(posts.id == 0 && posts.title == '' && posts.message == ''){
    return;
  }

  Object.keys(posts).forEach((i, index) => {
    const post = {
      id: posts[i].id,
      title: posts[i].title,
      message: posts[i].message,
      author: posts[i].author,
      to: posts[i].to,
    };
    card.cardCreate(post, index + 1);
  });
  card.cardPage();
  card.cardFilter();
}).catch(err => {
  document
  .getElementById("loader")
  .parentNode.removeChild(document.getElementById("loader"));
  document.getElementById('add-icon').removeAttribute('hidden')

})
