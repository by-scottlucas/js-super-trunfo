// Cartas e seus Atributos

const subZero = {
    atributos: {
        forca: 10, agilidade: 5, magia: 5, combate: 8
    }
}

const scorpion = {
    atributos: {
        forca: 8, agilidade: 6, magia: 4, combate: 9
    }
}

const raiden = {
    atributos: {
        forca: 9, agilidade: 8, magia: 10, combate: 6
    }
}

const liuKang = {
    atributos: {
        forca: 10, agilidade: 10, magia: 5, combate: 10
    }
}

const kungLao = {
    atributos: {
        forca: 10, agilidade: 10, magia: 5, combate: 7
    }
}

const mileena = {
    atributos: {
        forca: 6, agilidade: 10, magia: 7, combate: 8
    }
}

const kitana = {
    atributos: {
        forca: 6, agilidade: 10, magia: 8, combate: 9
    }
}

const frost = {
    atributos: {
        forca: 8, agilidade: 8, magia: 5, combate: 4
    }
}

const cassieCage = {
    atributos: {
        forca: 10, agilidade: 6, magia: 2, combate: 8
    }
}

const jacquiBriggs = {
    atributos: {
        forca: 10, agilidade: 8, magia: 4, combate: 5
    }
}

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let cartas = [subZero, scorpion, raiden, liuKang, kungLao, mileena, kitana, frost, cassieCage, jacquiBriggs];

function pegarCard() {

    let img = document.createElement('img');

    let cardSelect = [];
    let cards = document.getElementsByName('card');

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].checked) {
            console.log("Personagem: " + cards[i].value);
            cardSelect.push(cards[i].value);
        }
    }

    if (card1 !== null && card1.getElementsByTagName('img').length === 0) {

        if (cardSelect == 'subzero') {
            img.src = '../assets/01.png';
            card1.appendChild(img);
            document.getElementById('subzero').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'scorpion') {
            img.src = '../assets/02.png';
            card1.appendChild(img);
            document.getElementById('scorpion').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'raiden') {
            img.src = '../assets/03.png';
            card1.appendChild(img);
            document.getElementById('raiden').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'liuKang') {
            img.src = '../assets/04.png';
            card1.appendChild(img);
            document.getElementById('liuKang').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kungLao') {
            img.src = '../assets/05.png';
            card1.appendChild(img);
            document.getElementById('kungLao').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'mileena') {
            img.src = '../assets/06.png';
            card1.appendChild(img);
            document.getElementById('mileena').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kitana') {
            img.src = '../assets/07.png';
            card1.appendChild(img);
            document.getElementById('kitana').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'frost') {
            img.src = '../assets/08.png';
            card1.appendChild(img);
            document.getElementById('frost').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'cassieCage') {
            img.src = '../assets/09.png';
            card1.appendChild(img);
            document.getElementById('cassieCage').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else {
            img.src = '../assets/10.png';
            card1.appendChild(img);
            document.getElementById('jacquiBriggs').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

    } else if (card2 !== null && card2.getElementsByTagName('img').length === 0) {

        if (cardSelect == 'subzero') {
            img.src = '../assets/01.png';
            card2.appendChild(img);
            document.getElementById('subzero').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'scorpion') {
            img.src = '../assets/02.png';
            card2.appendChild(img);
            document.getElementById('scorpion').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'raiden') {
            img.src = '../assets/03.png';
            card2.appendChild(img);
            document.getElementById('raiden').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'liuKang') {
            img.src = '../assets/04.png';
            card2.appendChild(img);
            document.getElementById('liuKang').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kungLao') {
            img.src = '../assets/05.png';
            card2.appendChild(img);
            document.getElementById('kungLao').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'mileena') {
            img.src = '../assets/06.png';
            card2.appendChild(img);
            document.getElementById('mileena').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kitana') {
            img.src = '../assets/07.png';
            card2.appendChild(img);
            document.getElementById('kitana').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'frost') {
            img.src = '../assets/08.png';
            card2.appendChild(img);
            document.getElementById('frost').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'cassieCage') {
            img.src = '../assets/09.png';
            card2.appendChild(img);
            document.getElementById('cassieCage').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else {
            img.src = '../assets/10.png';
            card2.appendChild(img);
            document.getElementById('jacquiBriggs').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        document.getElementById("tabuleiro").style.display = "none";
        document.getElementById("figth").style.display = "block";
    }
}

function pegarAtributo() {

    let atributoSelect = [];
    let atributo = document.getElementsByName('atributos');

    for (let i = 0; i < atributo.length; i++) {
        if (atributo[i].checked) {
            console.log("Atributo: " + atributo[i].value);
            atributoSelect.push(atributo[i].value);
        }
    }
}

// function fight() {

//     let cartasSelect = cardSelect.join(cartas).toString();
//     let atributoSelected = atributoSelect;


//     if ((card2 !== null && card2.getElementsByTagName('img').length === 0) && (card1 !== null && card1.getElementsByTagName('img').length === 0)) {
//         if (atributoSelected == "Força") {
//             if (cartas)
//                 alert("Atributo: " + atributo);
//         }

//         console.log("Carta: " + cartasSelect);
//     }


// }