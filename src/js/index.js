import "../styles/style.scss";
const url = 'https://app-mural.herokuapp.com/mural';
const card = require("./card");


card.msgInit({
    title: 'Menssagens Para Vocês',
    message: 'Você pode deixar sua menssagem clicando no icone de mais a esquerda! \n\n A mensagem deve ter um titulo e pode ter até 300 caracteres (mais que o tt). \n\n Na lupinha, você pode pesquisar nome de pessoas e filtrar menssagem enviadas ou recebidas por ela.',
    author: 'Pedro',
    to: 'Todos'
});

card.cardFilter();

let data = fetch(url).then(response => {
    return response.json();
}).then();

data.then(posts => {
    Object.keys(posts).forEach( (i, index) => {
        const post = {
            id: posts[i].id,
            title: posts[i].title,
            message: posts[i].message,
            author: posts[i].author,
            to: posts[i].to ? posts[i].to : null
        }     
        card.cardCreate(post, index + 1)  
    })

    card.cardFilter();
})


document.getElementById("button-search").addEventListener('click', () => {
    if(document.getElementById('search').value) {
        document.getElementById('form-search').submit()
    }
})

