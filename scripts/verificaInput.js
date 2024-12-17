document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const cepError = document.getElementById('cepError');

    cepInput.addEventListener('input', function() {
        const cep = cepInput.value.trim(); 

        if (cep.length > 0 && !/^\d{8}$/.test(cep)) {
            cepError.textContent = "CEP inválido! Digite 8 números.";
            cepError.classList.add('show');
            cepInput.classList.add('invalid');
        } else {
            cepError.textContent = "";  
            cepError.classList.remove('show');  
            cepInput.classList.remove('invalid');  
        }
    });
});
