function cardCreate(post, i) {
    let card = document.getElementsByTagName("template")[0];
    let clone = card.content.cloneNode(true);
    document.getElementById('cards').appendChild(clone);
    post.message = setBreakLine(post.message);

    setCardContent(i, post.title, post.message, post.author, post.to);

    colorCards(i, ((i % 2) == 0));
}

function setCardContent(i, title = undefined, message = undefined, author = undefined, to = undefined) {
    title ? document.getElementsByClassName('card-title-text')[i].innerHTML = title : null;
    message ? document.getElementsByClassName('card-content')[i].innerHTML = message : null;
    author ? document.getElementsByClassName('author')[i].innerHTML = 'Autor(a): ' + author : null;
    
    if(to){
        document.getElementsByClassName('to')[i].innerHTML = 'Para: ' + to;
        document.getElementsByClassName('to')[i].removeAttribute('hidden');
        author ? document.getElementsByClassName('author')[i].innerHTML = 'De: ' + author : null
    }
    else 
        document.getElementsByName('card-footer')[i].className = "card-footer-center"
}

function setBreakLine(string) {
    while(string.indexOf('\n') > -1){
        string = string.replace('\n', '<br>');
    } 
    return string;
}

function colorCards(i, yellow) {
    if(yellow)
        document.getElementsByClassName('card-title')[i].className += ' title-yellow';
    else 
        document.getElementsByClassName('card-title')[i].className += ' title-red';
}

function cardFilter() {
    if(getSearch()){
        let search = getSearch();
        let indexForColors = [];
        let cards = document.getElementsByClassName('card-conteiner');

        for(let i = 0; i < cards.length; i++){
            if(getFooterString(i).indexOf(search) < 0){
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

function getFooterString(i) {
    let cards = document.getElementsByClassName('card-conteiner');
    let footer = cards[i].lastElementChild.innerText;
    footer = footer.toUpperCase();
    footer = footer.replace(' ', '');
    footer = footer.replace(' ', '');
    footer = footer.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    
    return footer;
}

function getSearch() {
    if(location.search.includes('search')){
        let search = '';
        for(let i = location.search.indexOf('=') + 1; i < location.search.indexOf('page') - 1; i++){
            search += location.search[i];
        }
    
        search = decodeURI(search);
        search = search.toUpperCase();
        search = search.replace('+', '');
        search = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
        return search;
    }
    return undefined;
}

function cardPage() {
    if(document.location.search.includes('page')){
        let page = '';
        for(let i = location.search.indexOf('page') + 5; i < location.search.length ; i++){
            page += location.search[i];
        }

        return page;
    }
}

module.exports = {
    cardCreate,
    cardFilter,
    cardPage,
    setCardContent
}
