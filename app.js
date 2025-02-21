function sortear() { 
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade < 1 || de < 1 || ate < 1 || de >= ate || quantidade > (ate - de + 1)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const numeros = [];
    while (numeros.length < quantidade) {
        const numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    const resultadoTexto = `Números sorteados: ${numeros.join(', ')}`;
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">${resultadoTexto}</label>`;
    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');

    const msg = new SpeechSynthesisUtterance(`${resultadoTexto}. Parabéns e boa sorte!, obrigado pela preferência!As loterias do Mineiro do Queijo agradecem!`);
    window.speechSynthesis.speak(msg);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}