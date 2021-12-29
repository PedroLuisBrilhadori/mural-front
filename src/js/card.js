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
        document.getElementsByClassName('author')[i].innerHTML = 'De: ' + post.author;
    }
    else 
        document.getElementsByName('card-footer')[i].className = "card-footer-center"

    colorCards(i, ((i % 2) == 0));
}

function colorCards(i, yellow) {
    if(yellow)
        document.getElementsByClassName('card-title')[i].className += ' title-yellow';
    else 
        document.getElementsByClassName('card-title')[i].className += ' title-red';
}

function cardFilter() {
    if(location.search.includes('search')){
        let search = '';
        for(let i = location.search.indexOf('=') + 1; i < location.search.length ; i++){
            search += location.search[i];
        }

        search = decodeURI(search);
        search = search.toUpperCase();
        search = search.replace('+', '');

        let cards = document.getElementsByClassName('card-conteiner');
        let indexForColors = [];

        for(let i = 0; i < cards.length; i++){
            let footer = cards[i].lastElementChild.innerText;
            footer = footer.toUpperCase();
            footer = footer.replace(' ', '');
            footer = footer.replace(' ', '');
            if(footer.indexOf(search) < 0){
                cards[i].style.display = 'none';
            } else {
                indexForColors.push(i);
            }
        }

        for(let i = 0; i < indexForColors.length; i++){
            colorCards(indexForColors[i], ((i % 2) === 0))
        }

    }
}

module.exports = {
    cardCreate,
    cardFilter
}