const card = require("./card");

card.addEventLinster('click', () => { card.changeAllCard('teste', 'mudando All card');}, 'ok');
card.addEventLinster('click', () => card.setcardCache(0), 'back');