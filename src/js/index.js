const url = 'https://app-mural.herokuapp.com/mural';
const card = require("./card");


card.msgInit({
    title: 'Menssagens Para Vocês',
    message: 'Este site é um muralzinho, deixe sua mensagem para quem quiser! \n\n Você pode enviar sua mensagem com até 300 caracteres (mais que o tt) e com um título. \n\n A pesquisa é por nome, ou seja, você pode pesquisar seu nome na lupinha.',
    author: 'Pedro',
    to: 'Todos'
});

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

