document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const cepError = document.getElementById('cepError');
    const btnEnviar = document.getElementById('btnEnviar');
    const cepForm = document.getElementById('cepForm');

    btnEnviar.addEventListener('click', function (event) {
        event.preventDefault();

        const cep = cepInput.value.trim();

        if (!/^\d{8}$/.test(cep)) {
            cepError.textContent = "CEP inválido! Digite 8 números.";
            cepError.classList.add('show');
            cepInput.classList.add('invalid');
            return; 
        }

        cepError.textContent = "";
        cepError.classList.remove('show');
        cepInput.classList.remove('invalid');

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    cepError.textContent = "CEP não encontrado!";
                    cepError.classList.add('show');
                    cepInput.classList.add('invalid');
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
                cepError.textContent = "Erro ao consultar o CEP. Tente novamente.";
                cepError.classList.add('show');
                cepInput.classList.add('invalid');
            });
    });
});
