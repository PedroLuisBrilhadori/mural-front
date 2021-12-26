let cardCache = [];

function changeContent(content, cache = true){
    document.getElementById('card-content').innerHTML = content;
    if(cahce){
        pushcardCache();
    }
}

function changeTitle(title, cache = true) {
    document.getElementById('card-title-text').innerHTML = title;
    if(cahce){
        pushcardCache();
    }
}

function changeAllCard(title, content){
    changeTitle(title, false);
    changeContent(content);
    console.log(cardCache);
}

function hiddenButton(){
    document.getElementById('card-button-ok').setAttribute('hidden', true);
}

function lookButton () {
    document.getElementById('card-button-ok').removeAttribute('hidden');
}

function addEventLinster(type, linster, button){
    document.getElementById(`card-button-${button}`).addEventListener(type, linster);
}

function removeEventLinster(type, linster, button) {
    document.getElementById(`card-button-${button}`).removeEventListener(type, linster);
}

function _pushcardCache() {
    const card = ({
        title: document.getElementById('card-title-text').innerHTML,
        content: document.getElementById('card-content').innerHTML
    });

    if(!_include(card))
        cardCache.push(card);
}

function _include(card){
    let include = false;
    cardCache.forEach( cache => {
        if (cache.title == card.title && cache.content == card.content) {   
            include = true;
        }
    });
    return include;
}

function getcardCache(index) {
    return cardCache[index];
}

function clearcardCache() {
    cardCache = [];
}

function setcardCache(index) {
    if(cardCache.length > 0 && index >= 0){
        changeAllCard(cardCache[index].title, cardCache[index].content)
    } else {
        throw Error('Histórico do card não possui este registro');
    }
}

module.exports = {
    changeContent,
    changeTitle,
    changeAllCard,
    hiddenButton,
    lookButton,
    addEventLinster,
    removeEventLinster,
    getcardCache,
    clearcardCache,
    setcardCache,
}