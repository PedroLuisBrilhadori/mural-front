function cardCreate(post) {
    let card = document.getElementsByTagName("template")[0];
    let clone = card.content.cloneNode(true);
    document.getElementById('cards').appendChild(clone)
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


module.exports = {
    cardCreate,
    hiddenButton,
    lookButton,
    addEventLinster,
    removeEventLinster,
}