function cardCreate(post, i) {
    let card = document.getElementsByTagName("template")[0];
    let clone = card.content.cloneNode(true);
    document.getElementById('cards').appendChild(clone);

    document.getElementsByClassName('card-title-text')[i].innerHTML = post.title;
    document.getElementsByClassName('card-content')[i].innerHTML = post.message;
    document.getElementsByClassName('author')[i].innerHTML = 'Autor: ' + post.author;
    
    if(post.to){
        document.getElementsByClassName('to')[i].innerHTML = 'Para: ' + post.to;
        document.getElementsByClassName('to')[i].removeAttribute('hidden');
    }
    else 
        document.getElementsByName('card-footer')[i].className = "card-footer-center"
}



module.exports = {
    cardCreate,
}