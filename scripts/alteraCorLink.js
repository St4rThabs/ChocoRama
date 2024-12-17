document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link'); // Seleciona todos os links com a classe "link"

    // Verifica se existe um link com a cor alterada armazenada no localStorage
    const storedLink = localStorage.getItem('clickedLink');
    
    // Se um link foi clicado anteriormente, aplica a cor nele
    if (storedLink) {
        const link = document.querySelector(`.link[href="${storedLink}"]`);
        if (link) {
            link.style.color = '#B7B597';
        }
    }

    // Para cada link com a classe "link", adiciona um evento de clique
    links.forEach(link => {
        link.addEventListener('click', function () {
            // Altera a cor do link clicado
            link.style.color = '#B7B597';

            // Armazena o href do link clicado no localStorage
            localStorage.setItem('clickedLink', link.getAttribute('href'));
        });
    });
});
