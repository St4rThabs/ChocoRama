document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const cepError = document.getElementById('cepError');
    const btnEnviar = document.getElementById('btnEnviar');
    const cepForm = document.getElementById('cepForm');

    function validarCep(cep) {
        return /^\d{8}$/.test(cep);
    }

    function exibirErro(mensagem) {
        cepError.textContent = mensagem;
        cepError.classList.add('show');
        cepInput.classList.add('invalid');
    }

    function limparErro() {
        cepError.textContent = "";
        cepError.classList.remove('show');
        cepInput.classList.remove('invalid');
    }

    btnEnviar.addEventListener('click', function (event) {
        event.preventDefault();
        const cep = cepInput.value.trim();

        if (!validarCep(cep)) {
            exibirErro("CEP inválido! Digite 8 números.");
            return; 
        }

        limparErro();

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    exibirErro("CEP não encontrado!");
                } else {
                    const endereco = `
                        Endereço Encontrado:
                        Rua: ${data.logradouro || 'N/A'}
                        Bairro: ${data.bairro || 'N/A'}
                        Cidade: ${data.localidade || 'N/A'}
                        Estado: ${data.uf || 'N/A'}
                        CEP: ${data.cep}
                    `;
                    alert(endereco);
                    let enderecoInput = document.createElement('input');
                    enderecoInput.type = 'hidden';
                    enderecoInput.name = 'endereco';
                    enderecoInput.value = endereco;
                    cepForm.appendChild(enderecoInput);

                    cepForm.submit();
                }
            })
            .catch(error => {
                console.error("Erro ao consultar CEP:", error);
                exibirErro("Erro ao consultar o CEP. Tente novamente.");
            });
    });
});
