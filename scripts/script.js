// Cartas e seus Atributos

const subZero = {
    nome: "Sub-Zero",
    atributos: { forca: 10, agilidade: 5, magia: 10, combate: 5 }
};

const scorpion = {
    nome: "Scorpion",
    atributos: { forca: 1, agilidade: 8, magia: 1, combate: 8 }
};

const raiden = {
    nome: "Raiden",
    atributos: { forca: 9, agilidade: 4, magia: 9, combate: 4 }
};

const liuKang = {
    nome: "Liu Kang",
    atributos: { forca: 2, agilidade: 7, magia: 2, combate: 7 }
};

const kungLao = {
    nome: "Kung Lao",
    atributos: { forca: 8, agilidade: 3, magia: 8, combate: 3 }
};

const mileena = {
    nome: "Mileena",
    atributos: { forca: 3, agilidade: 8, magia: 3, combate: 8 }
};

const kitana = {
    nome: "Kitana",
    atributos: { forca: 7, agilidade: 2, magia: 7, combate: 2 }
};

const frost = {
    nome: "Frost",
    atributos: { forca: 4, agilidade: 9, magia: 4, combate: 9 }
};

const cassieCage = {
    nome: "Cassie Cage",
    atributos: { forca: 6, agilidade: 1, magia: 6, combate: 1 }
};

const jacquiBriggs = {
    nome: "Jacqui Briggs",
    atributos: { forca: 5, agilidade: 10, magia: 5, combate: 10 }
};


let carta1;
let carta2;
let cartas = [subZero, scorpion, raiden, liuKang, kungLao, mileena, kitana, frost, cassieCage, jacquiBriggs];

let cardSelect = [];

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
            carta1 = cartas[0];
            img.src = '../../assets/01.png';
            card1.appendChild(img);
            document.getElementById('subzero').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'scorpion') {
            carta1 = cartas[1];
            img.src = '../../assets/02.png';
            card1.appendChild(img);
            document.getElementById('scorpion').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'raiden') {
            carta1 = cartas[2];
            img.src = '../../assets/03.png';
            card1.appendChild(img);
            document.getElementById('raiden').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'liuKang') {
            carta1 = cartas[3];
            img.src = '../../assets/04.png';
            card1.appendChild(img);
            document.getElementById('liuKang').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kungLao') {
            carta1 = cartas[4];
            img.src = '../../assets/05.png';
            card1.appendChild(img);
            document.getElementById('kungLao').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'mileena') {
            carta1 = cartas[5];
            img.src = '../../assets/06.png';
            card1.appendChild(img);
            document.getElementById('mileena').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kitana') {
            carta1 = cartas[6];
            img.src = '../../assets/07.png';
            card1.appendChild(img);
            document.getElementById('kitana').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'frost') {
            carta1 = cartas[7];
            img.src = '../../assets/08.png';
            card1.appendChild(img);
            document.getElementById('frost').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'cassieCage') {
            carta1 = cartas[8];
            img.src = '../../assets/09.png';
            card1.appendChild(img);
            document.getElementById('cassieCage').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else {
            img.src = '../../assets/10.png';
            carta1 = cartas[9];
            card1.appendChild(img);
            document.getElementById('jacquiBriggs').style.display = 'none';
            document.getElementById('fight').style.display = '';
        }
        
        document.getElementById("tabuleiro").style.display = "flex";
        document.getElementById("tabuleiro").style.flexDirection = "row";

    } else if (card2 !== null && card2.getElementsByTagName('img').length === 0) {

        if (cardSelect == 'subzero') {
            carta2 = cartas[0];
            img.src = '../../assets/01.png';
            card2.appendChild(img);
            document.getElementById('subzero').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'scorpion') {
            carta2 = cartas[1];
            img.src = '../../assets/02.png';
            card2.appendChild(img);
            document.getElementById('scorpion').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'raiden') {
            carta2 = cartas[2];
            img.src = '../../assets/03.png';
            card2.appendChild(img);
            document.getElementById('raiden').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'liuKang') {
            carta2 = cartas[3];
            img.src = '../../assets/04.png';
            card2.appendChild(img);
            document.getElementById('liuKang').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kungLao') {
            carta2 = cartas[4];
            img.src = '../../assets/05.png';
            card2.appendChild(img);
            document.getElementById('kungLao').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'mileena') {
            carta2 = cartas[5];
            img.src = '../../assets/06.png';
            card2.appendChild(img);
            document.getElementById('mileena').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'kitana') {
            carta2 = cartas[6];
            img.src = '../../assets/07.png';
            card2.appendChild(img);
            document.getElementById('kitana').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'frost') {
            carta2 = cartas[7];
            img.src = '../../assets/08.png';
            card2.appendChild(img);
            document.getElementById('frost').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else if (cardSelect == 'cassieCage') {
            carta2 = cartas[8];
            img.src = '../../assets/09.png';
            card2.appendChild(img);
            document.getElementById('cassieCage').style.display = 'none';
            document.getElementById('fight').style.display = '';

        }

        else {
            img.src = '../../assets/10.png';
            carta2 = cartas[9];
            card2.appendChild(img);
            document.getElementById('jacquiBriggs').style.display = 'none';
            document.getElementById('fight').style.display = '';
        }

        document.getElementById("tabuleiro").style.display = "none";
        document.getElementById("figth").style.display = "block";
    }
}

let atributoSelect = [];
function pegarAtributo() {

    let atributo = document.getElementsByName('atributos');

    for (let i = 0; i < atributo.length; i++) {
        if (atributo[i].checked) {
            console.log("Atributo: " + atributo[i].value);
            atributoSelect.push(atributo[i].value);
        }
    }
}

function figth() {

    let carta01 = carta1;
    let carta02 = carta2

    if (atributoSelect == "Força") {

        if (carta01.atributos.forca > carta02.atributos.forca) {
            alert(carta01.nome + " - Força:  " + carta01.atributos.forca + "  VS  " + carta02.nome + " - Força:  " + carta02.atributos.forca);

            alert(carta01.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";

        } else {
            alert(carta01.nome + " - Força:  " + carta01.atributos.forca + "  VS  " + carta02.nome + " - Força:  " + carta02.atributos.forca);

            alert(carta02.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";

        }
    }

    if (atributoSelect == "Agilidade") {
        if (carta01.atributos.agilidade > carta02.atributos.agilidade) {
            alert(carta01.nome + " - Agilidade:  " + carta01.atributos.agilidade + " VS  " + carta02.nome + " - Agilidade:  " + carta02.atributos.agilidade);

            alert(carta01.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";


        } else {
            alert(carta01.nome + " - Agilidade:  " + carta01.atributos.agilidade + "  VS  " + carta02.nome + " - Agilidade:  " + carta02.atributos.agilidade);

            alert(carta02.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";

        }
    }

    if (atributoSelect == "Magia") {
        if (carta01.atributos.magia > carta02.atributos.magia) {
            alert(carta01.nome + " - Magia:  " + carta01.atributos.magia + "  VS  " + carta02.nome + " - magia:  " + carta02.atributos.magia);

            alert(carta01.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";


        } else {
            alert(carta01.nome + " - Magia:  " + carta01.atributos.magia + "  VS  " + carta02.nome + " - Magia:  " + carta02.atributos.magia);

            alert(carta02.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";

        }
    }

    if (atributoSelect == "Combate") {
        if (carta01.atributos.combate > carta02.atributos.combate) {
            alert(carta01.nome + " - Combate:  " + carta01.atributos.combate + "  VS  " + carta02.nome + " - Combate:  " + carta02.atributos.combate);

            alert(carta01.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";

        } else {
            alert(carta01.nome + " - Combate:  " + carta01.atributos.combate + "  VS  " + carta02.nome + " - Combate:  " + carta02.atributos.combate);

            alert(carta02.nome + " Wins!!!");

            document.getElementById("play-again").style.display = "block";

        }
    }
}

function playAgain() {
    location.reload();
}