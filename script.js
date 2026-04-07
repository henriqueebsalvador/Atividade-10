const form = document.getElementById('FormAdocao');

const cpfsCadastrados = ['99999999999', '88888888888', '77777777777'];

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
        alert('Erro: O nome deve ter pelo menos 3 caracteres.');
        return;
    }

    if (email.indexOf('@') === -1) {
        alert('Erro: O email deve conter "@".');
        return;
    }

    if (telefone.length < 8) {
        alert('Erro: O telefone deve ter 8 dígitos.');
        return;
    }

    if (cpf === "") {
        alert('Erro: O CPF e obrigatorio.');
        return;
    }

    if (isNaN(idade)) {
        alert('Erro: A idade deve ser um numero certo.');
        return;
    }

    if (cidade === "") {
        alert('Erro: A cidade e obrigatoria.');
        return;
    }

    if (moradia === "") {
        alert('Erro: O tipo de moradia e obrigatorio.');
        return;
    }

    if (quintal === "") {
        alert('Erro: Informar se tem quintal e obrigatorio.');
        return;
    }

    if (jaTevePets === "") {
        alert('Erro: Informar se teve pet e obrigatorio.');
        return;
    }

    if (espacoExterno === "") {
        alert('Erro: Informar sobre o espaço externo e obrigatorio.');
        return;
    }

    if (isNaN(horasSozinho)) {
        alert('Erro: As horas sozinho devem ser um valor numerico.');
        return;
    }

    if (motivo.length < 10) {
        alert('Erro: O motivo deve ter pelo menos 10 caracteres.');
        return;
    }

    if (!termos) {
        alert('Erro: Voce deve aceitar os termos de responsabilidade.');
        return;
    }

    if (idade < 18) {
        alert('O candidato tem que ter 18 anos ou mais. O envio foi bloqueado.');
        return;
    }

    if (cpfsCadastrados.indexOf(cpf) !== -1) {
        alert('Este CPF ja esta cadastrado em nosso sistema. Procure a ONG.');
        return;
    }

    if (moradia === 'apartamento' && quintal === 'sim') {
        alert('Erro de Coerência: Quem mora em apartamento nao pode indicar que tem quintal.');
        return;
    }

    if (quintal === 'nao' && espacoExterno === 'sim') {
        alert('Erro de Coerência: Quem nao tem quintal nao pode indicar uso de espaço externo.');
        return;
    }

    if (moradia === 'apartamento' && permitirAnimais === "") {
        alert('Atenção: Para apartamento, informe se o local permite animais.');
        return;
    }
    if (moradia === 'casa' && quintalSeguro === "") {
        alert('Atenção: Para casa, informe se o quintal é seguro.');
        return;
    }

    if (horasSozinho > 8) {
        alert('Aviso: O animal ficará mais de 8 horas sozinho por dia. Solicitamos uma justificativa adicional nas observações (ou entraremos em contato para mais detalhes).');
    }

    if (jaTevePets === 'nao') {
        alert('Mensagem da ONG: Como você nunca teve um pet, informamos que haverá um acompanhamento especial da nossa equipe!');
    }

    if (motivo === "quero" || motivo === "porque sim" || motivo === "quero um pet" || motivo === "amo animais") {
        alert('O motivo da adoção não pode ser genérico. Por favor, detalhe mais sua resposta.');
        return;
    }

    if (quandoDecidiu === 'hoje') {
        alert('Alerta: Decisões impulsivas podem não ser ideais para a vida de um pet. Pense com calma!');
    }

    alert('Formulário enviado com sucesso! O telefone informado será o nosso principal meio de contato.');
    form.reset();
});
