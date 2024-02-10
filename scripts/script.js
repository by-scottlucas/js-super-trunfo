
let carta1;
let carta2;

let cartas = [
    { img: '../../assets/01.png', nome: "Sub-Zero", atributos: { forca: 10, agilidade: 5, magia: 10, combate: 5 } },
    { img: '../../assets/02.png', nome: "Scorpion", atributos: { forca: 1, agilidade: 8, magia: 1, combate: 8 } },
    { img: '../../assets/03.png', nome: "Raiden", atributos: { forca: 9, agilidade: 4, magia: 9, combate: 4 } },
    { img: '../../assets/04.png', nome: "Liu Kang", atributos: { forca: 2, agilidade: 7, magia: 2, combate: 7 } },
    { img: '../../assets/05.png', nome: "Kung Lao", atributos: { forca: 8, agilidade: 3, magia: 8, combate: 3 } },
    { img: '../../assets/06.png', nome: "Mileena", atributos: { forca: 3, agilidade: 8, magia: 3, combate: 8 } },
    { img: '../../assets/07.png', nome: "Kitana", atributos: { forca: 7, agilidade: 2, magia: 7, combate: 2 } },
    { img: '../../assets/08.png', nome: "Frost", atributos: { forca: 4, agilidade: 9, magia: 4, combate: 9 } },
    { img: '../../assets/09.png', nome: "Cassie Cage", atributos: { forca: 6, agilidade: 1, magia: 6, combate: 1 } },
    { img: '../../assets/10.png', nome: "Jacqui Briggs", atributos: { forca: 5, agilidade: 10, magia: 5, combate: 10 } }
];

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

        switch (cardSelect[0]) {
            case 'subzero':
                carta1 = cartas[0];
                img.src = cartas[0].img;
                card1.appendChild(img);
                document.getElementById('subzero').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'scorpion':
                carta1 = cartas[1];
                img.src = cartas[1].img;
                card1.appendChild(img);
                document.getElementById('scorpion').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'raiden':
                carta1 = cartas[2];
                img.src = cartas[2].img;
                card1.appendChild(img);
                document.getElementById('raiden').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'liuKang':
                carta1 = cartas[3];
                img.src = cartas[3].img;
                card1.appendChild(img);
                document.getElementById('liuKang').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'kungLao':
                carta1 = cartas[4];
                img.src = cartas[4].img;
                card1.appendChild(img);
                document.getElementById('kungLao').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'mileena':
                carta1 = cartas[5];
                img.src = cartas[5].img;
                card1.appendChild(img);
                document.getElementById('mileena').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'kitana':
                carta1 = cartas[6];
                img.src = cartas[6].img;
                card1.appendChild(img);
                document.getElementById('kitana').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'frost':
                carta1 = cartas[7];
                img.src = cartas[7].img;
                card1.appendChild(img);
                document.getElementById('frost').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'cassieCage':
                carta1 = cartas[8];
                img.src = cartas[8].img;
                card1.appendChild(img);
                document.getElementById('cassieCage').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            default:
                carta1 = cartas[9];
                img.src = cartas[9].img;
                card1.appendChild(img);
                document.getElementById('jacquiBriggs').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
        }

        document.getElementById("tabuleiro").style.display = "flex";
        document.getElementById("tabuleiro").style.flexDirection = "row";
        document.getElementById("tabuleiro").style.width = "90%";

    } else if (card2 !== null && card2.getElementsByTagName('img').length === 0) {

        switch (cardSelect[0]) {
            case 'subzero':
                carta2 = cartas[0];
                img.src = cartas[0].img;
                card2.appendChild(img);
                document.getElementById('subzero').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'scorpion':
                carta2 = cartas[1];
                img.src = cartas[1].img;
                card2.appendChild(img);
                document.getElementById('scorpion').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'raiden':
                carta2 = cartas[2];
                img.src = cartas[2].img;
                card2.appendChild(img);
                document.getElementById('raiden').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'liuKang':
                carta2 = cartas[3];
                img.src = cartas[3].img;
                card2.appendChild(img);
                document.getElementById('liuKang').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'kungLao':
                carta2 = cartas[4];
                img.src = cartas[4].img;
                card2.appendChild(img);
                document.getElementById('kungLao').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'mileena':
                carta2 = cartas[5];
                img.src = cartas[5].img;
                card2.appendChild(img);
                document.getElementById('mileena').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'kitana':
                carta2 = cartas[6];
                img.src = cartas[6].img;
                card2.appendChild(img);
                document.getElementById('kitana').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'frost':
                carta2 = cartas[7];
                img.src = cartas[7].img;
                card2.appendChild(img);
                document.getElementById('frost').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            case 'cassieCage':
                carta2 = cartas[8];
                img.src = cartas[8].img;
                card2.appendChild(img);
                document.getElementById('cassieCage').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
            default:
                carta2 = cartas[9];
                img.src = cartas[9].img;
                card2.appendChild(img);
                document.getElementById('jacquiBriggs').style.display = 'none';
                document.getElementById('fight').style.display = '';
                break;
        }

        document.getElementById("tabuleiro").style.display = "none";
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

    document.getElementById("fight-btn").style.display = "block";

}

function figth() {

    let carta01 = carta1;
    let carta02 = carta2;

    switch (atributoSelect.pop()) {

        case "Força":

            if (carta01.atributos.forca > carta02.atributos.forca) {
                alert(carta01.nome + " - Força:  " + carta01.atributos.forca + "  VS  " + carta02.nome + " - Força:  " + carta02.atributos.forca);
                alert(carta01.nome + " Wins!!!");
            } else {
                alert(carta01.nome + " - Força:  " + carta01.atributos.forca + "  VS  " + carta02.nome + " - Força:  " + carta02.atributos.forca);
                alert(carta02.nome + " Wins!!!");
            }

            break;

        case "Agilidade":

            if (carta01.atributos.agilidade > carta02.atributos.agilidade) {
                alert(carta01.nome + " - Agilidade:  " + carta01.atributos.agilidade + " VS  " + carta02.nome + " - Agilidade:  " + carta02.atributos.agilidade);
                alert(carta01.nome + " Wins!!!");
            } else {
                alert(carta01.nome + " - Agilidade:  " + carta01.atributos.agilidade + "  VS  " + carta02.nome + " - Agilidade:  " + carta02.atributos.agilidade);
                alert(carta02.nome + " Wins!!!");
            }
            break;

        case "Magia":

            if (carta01.atributos.magia > carta02.atributos.magia) {
                alert(carta01.nome + " - Magia:  " + carta01.atributos.magia + "  VS  " + carta02.nome + " - Magia:  " + carta02.atributos.magia);
                alert(carta01.nome + " Wins!!!");
            } else {
                alert(carta01.nome + " - Magia:  " + carta01.atributos.magia + "  VS  " + carta02.nome + " - Magia:  " + carta02.atributos.magia);
                alert(carta02.nome + " Wins!!!");
            }
            break;

        case 'Combate':

            if (carta01.atributos.combate > carta02.atributos.combate) {
                alert(carta01.nome + " - Combate:  " + carta01.atributos.combate + "  VS  " + carta02.nome + " - Combate:  " + carta02.atributos.combate);
                alert(carta01.nome + " Wins!!!");
            } else {
                alert(carta01.nome + " - Combate:  " + carta01.atributos.combate + "  VS  " + carta02.nome + " - Combate:  " + carta02.atributos.combate);
                alert(carta02.nome + " Wins!!!");
            }
            break;

        default:
            break;
    }


    document.getElementById("atributos").style.display = "none";
    document.getElementById("fight-btn").style.display = "none";
    document.getElementById("play-again").style.display = "block";

}

function playAgain() {
    location.reload();
}