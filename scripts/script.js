
let carta1;
let carta2;

let cartas = [
    { nome: "Sub-Zero", img: '../../assets/images/01.png', atributos: { forca: 10, agilidade: 5, magia: 10, combate: 5 } },
    { nome: "Scorpion", img: '../../assets/images/02.png', atributos: { forca: 1, agilidade: 8, magia: 1, combate: 8 } },
    { nome: "Raiden", img: '../../assets/images/03.png', atributos: { forca: 9, agilidade: 4, magia: 9, combate: 4 } },
    { nome: "Liu Kang", img: '../../assets/images/04.png', atributos: { forca: 2, agilidade: 7, magia: 2, combate: 7 } },
    { nome: "Kung Lao", img: '../../assets/images/05.png', atributos: { forca: 8, agilidade: 3, magia: 8, combate: 3 } },
    { nome: "Mileena", img: '../../assets/images/06.png', atributos: { forca: 3, agilidade: 8, magia: 3, combate: 8 } },
    { nome: "Kitana", img: '../../assets/images/07.png', atributos: { forca: 7, agilidade: 2, magia: 7, combate: 2 } },
    { nome: "Frost", img: '../../assets/images/08.png', atributos: { forca: 4, agilidade: 9, magia: 4, combate: 9 } },
    { nome: "Cassie Cage", img: '../../assets/images/09.png', atributos: { forca: 6, agilidade: 1, magia: 6, combate: 1 } },
    { nome: "Jacqui Briggs", img: '../../assets/images/10.png', atributos: { forca: 5, agilidade: 10, magia: 5, combate: 10 } }
];

let cartaSelecionada = [];

function pegarCarta() {

    let img = document.createElement('img');

    let cartaSelecionada = [];
    let cards = document.getElementsByName('card');

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].checked) {
            console.log("Personagem: " + cards[i].value);
            cartaSelecionada.push(cards[i].value);
        }
    }

    if (card1 !== null && card1.getElementsByTagName('img').length === 0) {

        switch (cartaSelecionada[0]) {
            case 'subzero':
                carta1 = cartas[0];
                img.src = cartas[0].img;
                card1.appendChild(img);
                document.getElementById('subzero').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'scorpion':
                carta1 = cartas[1];
                img.src = cartas[1].img;
                card1.appendChild(img);
                document.getElementById('scorpion').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'raiden':
                carta1 = cartas[2];
                img.src = cartas[2].img;
                card1.appendChild(img);
                document.getElementById('raiden').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'liuKang':
                carta1 = cartas[3];
                img.src = cartas[3].img;
                card1.appendChild(img);
                document.getElementById('liuKang').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'kungLao':
                carta1 = cartas[4];
                img.src = cartas[4].img;
                card1.appendChild(img);
                document.getElementById('kungLao').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'mileena':
                carta1 = cartas[5];
                img.src = cartas[5].img;
                card1.appendChild(img);
                document.getElementById('mileena').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'kitana':
                carta1 = cartas[6];
                img.src = cartas[6].img;
                card1.appendChild(img);
                document.getElementById('kitana').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'frost':
                carta1 = cartas[7];
                img.src = cartas[7].img;
                card1.appendChild(img);
                document.getElementById('frost').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'cassieCage':
                carta1 = cartas[8];
                img.src = cartas[8].img;
                card1.appendChild(img);
                document.getElementById('cassieCage').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            default:
                carta1 = cartas[9];
                img.src = cartas[9].img;
                card1.appendChild(img);
                document.getElementById('jacquiBriggs').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
        }

        document.getElementById("cartas").style.display = "flex";
        document.getElementById("cartas").style.flexDirection = "row";

    } else if (card2 !== null && card2.getElementsByTagName('img').length === 0) {

        switch (cartaSelecionada[0]) {
            case 'subzero':
                carta2 = cartas[0];
                img.src = cartas[0].img;
                card2.appendChild(img);
                document.getElementById('subzero').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'scorpion':
                carta2 = cartas[1];
                img.src = cartas[1].img;
                card2.appendChild(img);
                document.getElementById('scorpion').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'raiden':
                carta2 = cartas[2];
                img.src = cartas[2].img;
                card2.appendChild(img);
                document.getElementById('raiden').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'liuKang':
                carta2 = cartas[3];
                img.src = cartas[3].img;
                card2.appendChild(img);
                document.getElementById('liuKang').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'kungLao':
                carta2 = cartas[4];
                img.src = cartas[4].img;
                card2.appendChild(img);
                document.getElementById('kungLao').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'mileena':
                carta2 = cartas[5];
                img.src = cartas[5].img;
                card2.appendChild(img);
                document.getElementById('mileena').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'kitana':
                carta2 = cartas[6];
                img.src = cartas[6].img;
                card2.appendChild(img);
                document.getElementById('kitana').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'frost':
                carta2 = cartas[7];
                img.src = cartas[7].img;
                card2.appendChild(img);
                document.getElementById('frost').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            case 'cassieCage':
                carta2 = cartas[8];
                img.src = cartas[8].img;
                card2.appendChild(img);
                document.getElementById('cassieCage').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
            default:
                carta2 = cartas[9];
                img.src = cartas[9].img;
                card2.appendChild(img);
                document.getElementById('jacquiBriggs').style.display = 'none';
                document.getElementById('game-box').style.display = '';
                break;
        }

        document.getElementById("cartas").style.display = "none";
    }

}

let atributoSelecionado = [];

function pegarAtributo() {

    let atributo = document.getElementsByName('atributos');

    for (let i = 0; i < atributo.length; i++) {
        if (atributo[i].checked) {
            console.log("Atributo: " + atributo[i].value);
            atributoSelecionado.push(atributo[i].value);
        }
    }

    document.getElementById("fight-btn").style.display = "block";

}

function figth() {

    switch (atributoSelecionado.pop()) {

        case "Força":

            if (carta1.atributos.forca > carta2.atributos.forca) {
                alert(carta1.nome + " - Força:  " + carta1.atributos.forca + "  VS  " + carta2.nome + " - Força:  " + carta2.atributos.forca);
                alert(carta1.nome + " Wins!!!");
            } else {
                alert(carta1.nome + " - Força:  " + carta1.atributos.forca + "  VS  " + carta2.nome + " - Força:  " + carta2.atributos.forca);
                alert(carta2.nome + " Wins!!!");
            }

            break;

        case "Agilidade":

            if (carta1.atributos.agilidade > carta2.atributos.agilidade) {
                alert(carta1.nome + " - Agilidade:  " + carta1.atributos.agilidade + " VS  " + carta2.nome + " - Agilidade:  " + carta2.atributos.agilidade);
                alert(carta1.nome + " Wins!!!");
            } else {
                alert(carta1.nome + " - Agilidade:  " + carta1.atributos.agilidade + "  VS  " + carta2.nome + " - Agilidade:  " + carta2.atributos.agilidade);
                alert(carta2.nome + " Wins!!!");
            }
            break;

        case "Magia":

            if (carta1.atributos.magia > carta2.atributos.magia) {
                alert(carta1.nome + " - Magia:  " + carta1.atributos.magia + "  VS  " + carta2.nome + " - Magia:  " + carta2.atributos.magia);
                alert(carta1.nome + " Wins!!!");
            } else {
                alert(carta1.nome + " - Magia:  " + carta1.atributos.magia + "  VS  " + carta2.nome + " - Magia:  " + carta2.atributos.magia);
                alert(carta2.nome + " Wins!!!");
            }
            break;

        case 'Combate':

            if (carta1.atributos.combate > carta2.atributos.combate) {
                alert(carta1.nome + " - Combate:  " + carta1.atributos.combate + "  VS  " + carta2.nome + " - Combate:  " + carta2.atributos.combate);
                alert(carta1.nome + " Wins!!!");
            } else {
                alert(carta1.nome + " - Combate:  " + carta1.atributos.combate + "  VS  " + carta2.nome + " - Combate:  " + carta2.atributos.combate);
                alert(carta2.nome + " Wins!!!");
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
    window.location.reload();
}