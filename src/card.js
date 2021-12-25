function changeContent(content){
    document.getElementById('card-content').innerHTML = content;
}

function changeTitle(title) {
    document.getElementById('card-title-text').innerHTML = title;
}

function changeAllCard(title, content){
    changeTitle(title);
    changeContent(content);
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
    changeContent,
    changeTitle,
    changeAllCard,
    hiddenButton,
    lookButton,
    addEventLinster,
    removeEventLinster
}