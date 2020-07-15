var total = 0;

function criarBalao() {
    var balao = document.createElement('img');
    balao.setAttribute('class', 'balao');
    balao.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Balao.png');

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 600);

    balao.setAttribute('style', 'left:'+x+'px;top:'+y+'px;');
    balao.setAttribute('onclick', 'estourar(this)');

    document.body.appendChild(balao)
}

function estourar (objeto) {
    document.body.removeChild(objeto);

    total++;

    var score = document.getElementById('total');
    score.innerHTML = 'Baloes estourados: ' + total;
}

function carregar () {
    setInterval(criarBalao, 1000)
}