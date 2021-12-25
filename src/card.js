class CardControl {
    changeContent(content){
        document.getElementById('card-content').innerHTML = content;
    }

    changeTitle(title) {
        document.getElementById('card-title-text').innerHTML = title;
    }

    changeAllCard(title, content){
        this.changeTitle(title);
        this.changeContent(content);
    }

    hiddenButton(){
        document.getElementById('card-button-ok').setAttribute('hidden', true);
    }

    lookButton () {
        document.getElementById('card-button-ok').removeAttribute('hidden');
    }
}

module.exports = {
    CardControl
}