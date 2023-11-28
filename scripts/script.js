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
            document.getElementById('atributos1').innerHTML = `Força: ${subZero.atributos.forca}` + `<br>Agilidade: ${subZero.atributos.agilidade}` + `<br>Magia: ${subZero.atributos.magia}` + `<br>Combate: ${subZero.atributos.combate}`;

        }

        else if (cardSelect == 'scorpion') {
            img.src = '../assets/02.png';
            card1.appendChild(img);
            document.getElementById('scorpion').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${scorpion.atributos.forca}` + `<br>Agilidade: ${scorpion.atributos.agilidade}` + `<br>Magia: ${scorpion.atributos.magia}` + `<br>Combate: ${scorpion.atributos.combate}`;

        }

        else if (cardSelect == 'raiden') {
            img.src = '../assets/03.png';
            card1.appendChild(img);
            document.getElementById('raiden').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${raiden.atributos.forca}` + `<br>Agilidade: ${raiden.atributos.agilidade}` + `<br>Magia: ${raiden.atributos.magia}` + `<br>Combate: ${raiden.atributos.combate}`;

        }

        else if (cardSelect == 'liuKang') {
            img.src = '../assets/04.png';
            card1.appendChild(img);
            document.getElementById('liuKang').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${liuKang.atributos.forca}` + `<br>Agilidade: ${liuKang.atributos.agilidade}` + `<br>Magia: ${liuKang.atributos.magia}` + `<br>Combate: ${liuKang.atributos.combate}`;

        }

        else if (cardSelect == 'kungLao') {
            img.src = '../assets/05.png';
            card1.appendChild(img);
            document.getElementById('kungLao').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${kungLao.atributos.forca}` + `<br>Agilidade: ${kungLao.atributos.agilidade}` + `<br>Magia: ${kungLao.atributos.magia}` + `<br>Combate: ${kungLao.atributos.combate}`;

        }

        else if (cardSelect == 'mileena') {
            img.src = '../assets/06.png';
            card1.appendChild(img);
            document.getElementById('mileena').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${mileena.atributos.forca}` + `<br>Agilidade: ${mileena.atributos.agilidade}` + `<br>Magia: ${mileena.atributos.magia}` + `<br>Combate: ${mileena.atributos.combate}`;

        }

        else if (cardSelect == 'kitana') {
            img.src = '../assets/07.png';
            card1.appendChild(img);
            document.getElementById('kitana').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${kitana.atributos.forca}` + `<br>Agilidade: ${kitana.atributos.agilidade}` + `<br>Magia: ${kitana.atributos.magia}` + `<br>Combate: ${kitana.atributos.combate}`;

        }

        else if (cardSelect == 'frost') {
            img.src = '../assets/08.png';
            card1.appendChild(img);
            document.getElementById('frost').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${frost.atributos.forca}` + `<br>Agilidade: ${frost.atributos.agilidade}` + `<br>Magia: ${frost.atributos.magia}` + `<br>Combate: ${frost.atributos.combate}`;

        }

        else if (cardSelect == 'cassieCage') {
            img.src = '../assets/09.png';
            card1.appendChild(img);
            document.getElementById('cassieCage').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${cassieCage.atributos.forca}` + `<br>Agilidade: ${cassieCage.atributos.agilidade}` + `<br>Magia: ${cassieCage.atributos.magia}` + `<br>Combate: ${cassieCage.atributos.combate}`;

        }

        else {
            img.src = '../assets/10.png';
            card1.appendChild(img);
            document.getElementById('jacquiBriggs').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos1').innerHTML = `Força: ${jacquiBriggs.atributos.forca}` + `<br>Agilidade: ${jacquiBriggs.atributos.agilidade}` + `<br>Magia: ${jacquiBriggs.atributos.magia}` + `<br>Combate: ${jacquiBriggs.atributos.combate}`;

        }

    } else if (card2 !== null && card2.getElementsByTagName('img').length === 0) {

        if (cardSelect == 'subzero') {
            img.src = '../assets/01.png';
            card2.appendChild(img);
            document.getElementById('subzero').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${subZero.atributos.forca}` + `<br>Agilidade: ${subZero.atributos.agilidade}` + `<br>Magia: ${subZero.atributos.magia}` + `<br>Combate: ${subZero.atributos.combate}`;

        }

        else if (cardSelect == 'scorpion') {
            img.src = '../assets/02.png';
            card2.appendChild(img);
            document.getElementById('scorpion').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${scorpion.atributos.forca}` + `<br>Agilidade: ${scorpion.atributos.agilidade}` + `<br>Magia: ${scorpion.atributos.magia}` + `<br>Combate: ${scorpion.atributos.combate}`;

        }

        else if (cardSelect == 'raiden') {
            img.src = '../assets/03.png';
            card2.appendChild(img);
            document.getElementById('raiden').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${raiden.atributos.forca}` + `<br>Agilidade: ${raiden.atributos.agilidade}` + `<br>Magia: ${raiden.atributos.magia}` + `<br>Combate: ${raiden.atributos.combate}`;

        }

        else if (cardSelect == 'liuKang') {
            img.src = '../assets/04.png';
            card2.appendChild(img);
            document.getElementById('liuKang').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${liuKang.atributos.forca}` + `<br>Agilidade: ${liuKang.atributos.agilidade}` + `<br>Magia: ${liuKang.atributos.magia}` + `<br>Combate: ${liuKang.atributos.combate}`;

        }

        else if (cardSelect == 'kungLao') {
            img.src = '../assets/05.png';
            card2.appendChild(img);
            document.getElementById('kungLao').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${kungLao.atributos.forca}` + `<br>Agilidade: ${kungLao.atributos.agilidade}` + `<br>Magia: ${kungLao.atributos.magia}` + `<br>Combate: ${kungLao.atributos.combate}`;

        }

        else if (cardSelect == 'mileena') {
            img.src = '../assets/06.png';
            card2.appendChild(img);
            document.getElementById('mileena').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${mileena.atributos.forca}` + `<br>Agilidade: ${mileena.atributos.agilidade}` + `<br>Magia: ${mileena.atributos.magia}` + `<br>Combate: ${mileena.atributos.combate}`;

        }

        else if (cardSelect == 'kitana') {
            img.src = '../assets/07.png';
            card2.appendChild(img);
            document.getElementById('kitana').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${kitana.atributos.forca}` + `<br>Agilidade: ${kitana.atributos.agilidade}` + `<br>Magia: ${kitana.atributos.magia}` + `<br>Combate: ${kitana.atributos.combate}`;

        }

        else if (cardSelect == 'frost') {
            img.src = '../assets/08.png';
            card2.appendChild(img);
            document.getElementById('frost').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${frost.atributos.forca}` + `<br>Agilidade: ${frost.atributos.agilidade}` + `<br>Magia: ${frost.atributos.magia}` + `<br>Combate: ${frost.atributos.combate}`;

        }

        else if (cardSelect == 'cassieCage') {
            img.src = '../assets/09.png';
            card2.appendChild(img);
            document.getElementById('cassieCage').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${cassieCage.atributos.forca}` + `<br>Agilidade: ${cassieCage.atributos.agilidade}` + `<br>Magia: ${cassieCage.atributos.magia}` + `<br>Combate: ${cassieCage.atributos.combate}`;

        }

        else {
            img.src = '../assets/10.png';
            card2.appendChild(img);
            document.getElementById('jacquiBriggs').style.display = 'none';
            document.getElementById('fight').style.display = '';
            document.getElementById('atributos2').innerHTML = `Força: ${jacquiBriggs.atributos.forca}` + `<br>Agilidade: ${jacquiBriggs.atributos.agilidade}` + `<br>Magia: ${jacquiBriggs.atributos.magia}` + `<br>Combate: ${jacquiBriggs.atributos.combate}`;

        }
    }
}