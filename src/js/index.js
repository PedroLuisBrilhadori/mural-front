const url = 'http://localhost:3000/mural/'
const card = require("./card");


let data = fetch(url).then(response => {
    return response.json()
}).then()

data.then(posts => {
    Object.keys(posts).forEach( i => {
        const post = {
            id: posts[i].id,
            title: posts[i].title,
            message: posts[i].message,
            author: posts[i].author,
            to: posts[i].to ? posts[i].to : null
        }     
        console.log(post)
    })
})

for(let i = 0; i< 6; i++)
    card.cardCreate()   

