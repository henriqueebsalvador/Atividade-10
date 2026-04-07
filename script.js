const form = document.getElementById('FormAdocao');

const cpfsCadastrados = ['12345678901', '98765432100', '12312312312'];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cidade = document.getElementById('cidade').value;
    const moradia = document.getElementById('moradia').value;
    const permitirAnimais = document.getElementById('permitirAnimais').value;
    const quintal = document.getElementById('quintal').value;
    const quintalSeguro = document.getElementById('quintalSeguro').value;
    const jaTevePets = document.getElementById('jaTevePets').value;
    const espacoExterno = document.getElementById('espacoExterno').value;
    const horasSozinho = parseInt(document.getElementById('horasSozinho').value);
    const quandoDecidiu = document.getElementById('quandoDecidiu').value;
    const motivo = document.getElementById('motivo').value.toLowerCase();
    const termos = document.getElementById('termos').checked;

});
