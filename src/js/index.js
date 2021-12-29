const url = 'https://app-mural.herokuapp.com/mural';
const card = require("./card");


let data = fetch('./js/cache.json').then(response => {
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
        card.cardCreate(post, index)  
    })

    card.cardFilter();
})


document.getElementById("button-search").addEventListener('click', () => {
    document.getElementById('form-search').submit()
})

