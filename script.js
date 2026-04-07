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

    if (nome.length < 3) {
        alert('Erro: O nome deve ter no mínimo 3 caracteres.');
        return;
    }

    if (email.indexOf('@') === -1) {
        alert('Erro: O email deve ser válido (conter "@").');
        return;
    }

    if (telefone.length < 8) {
        alert('Erro: O telefone deve ter no mínimo 8 dígitos.');
        return;
    }

    if (cpf === "") {
        alert('Erro: O CPF é obrigatório.');
        return;
    }

    if (isNaN(idade)) {
        alert('Erro: A idade deve ser um número válido.');
        return;
    }

    if (cidade === "") {
        alert('Erro: A cidade é obrigatória.');
        return;
    }

    if (moradia === "") {
        alert('Erro: O tipo de moradia é obrigatório.');
        return;
    }

    if (quintal === "") {
        alert('Erro: Informar se possui quintal é obrigatório.');
        return;
    }

    if (jaTevePets === "") {
        alert('Erro: Informar se já teve pet é obrigatório.');
        return;
    }

    if (espacoExterno === "") {
        alert('Erro: Informar sobre uso de espaço externo é obrigatório.');
        return;
    }

    alert('Formulário enviado com sucesso! O telefone informado será o nosso principal meio de contato.');
    form.reset();
});
