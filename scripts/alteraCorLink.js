document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const storedLink = localStorage.getItem('clickedLink');
    
    if (storedLink) {
        const link = document.querySelector(`.link[href="${storedLink}"]`);
        if (link) {
            link.style.color = '#B7B597';
        }
    }
    links.forEach(link => {
        link.addEventListener('click', function () {
            link.style.color = '#B7B597';
            localStorage.setItem('clickedLink', link.getAttribute('href'));
        });
    });
});