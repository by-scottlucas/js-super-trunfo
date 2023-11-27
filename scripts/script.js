// Cartas e seus Atributos

const subZero = {
    nome: "Sub-Zero", imagem: "./assets/01.png", atributos: {
        forca: 10, agilidade: 5, magia: 5, combate: 8
    }
}

const scorpion = {
    nome: "Scorpion", imagem: "./assets/02.png", atributos: {
        forca: 8, agilidade: 6, magia: 4, combate: 9
    }
}

const raiden = {
    nome: "Raiden", imagem: "./assets/03.png", atributos: {
        forca: 9, agilidade: 8, magia: 10, combate: 6
    }
}

const liuKang = {
    nome: "Liu Kang", imagem: "./assets/04.png", atributos: {
        forca: 10, agilidade: 10, magia: 5, combate: 10
    }
}

const kungLao = {
    nome: "Kung Lao", imagem: "./assets/05.png", atributos: {
        forca: 10, agilidade: 10, magia: 5, combate: 7
    }
}

const mileena = {
    nome: "Mileena", imagem: "./assets/06.png", atributos: {
        forca: 6, agilidade: 10, magia: 7, combate: 8
    }
}

const kitana = {
    nome: "Kitana", imagem: "./assets/07.png", atributos: {
        forca: 6, agilidade: 10, magia: 8, combate: 9
    }
}

const frost = {
    nome: "Frost", imagem: "./assets/08.png", atributos: {
        forca: 8, agilidade: 8, magia: 5, combate: 4
    }
}

const cassieCage = {
    nome: "Cassie Cage", imagem: "./assets/09.png", atributos: {
        forca: 10, agilidade: 6, magia: 2, combate: 8
    }
}

const jacquiBriggs = {
    nome: "Jacqui Briggs", imagem: "./assets/10.png", atributos: {
        forca: 10, agilidade: 8, magia: 4, combate: 5
    }
}

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let cartas = [subZero, scorpion, raiden, liuKang, kungLao, mileena, kitana, frost, cassieCage, jacquiBriggs];

function pegarCard() {

    let img = document.createElement('img');
    let cardSelect = [];
    let cards = document.getElementsByName('teste');
    
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].checked) {
            console.log("Personagem: " + cards[i].value);
            cardSelect.push(cards[i].value);
        }
    }
    
    if (card1 !== null && card1.getElementsByTagName('img').length === 0) {

        if (cardSelect) {
            img.src = './assets/01.png';
            card1.appendChild(img);
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos').innerHTML = `Força: ${subZero.atributos.forca}` + `<br>Agilidade: ${subZero.atributos.agilidade}` + `<br>Magia: ${subZero.atributos.magia}` + `<br>Combate: ${subZero.atributos.combate}`;
        }

    } else if (card2 !== null && card2.getElementsByTagName('img').length === 0) {
        if (cardSelect) {
            img.src = './assets/01.png';
            card2.appendChild(img);
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos').innerHTML = `Magia: ${subZero.atributos.magia}`
        }
    }
}