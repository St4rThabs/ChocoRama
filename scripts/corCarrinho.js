document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.cart-btn'); 

    if (cartButtons.length > 0) {
        cartButtons.forEach((button, index) => {
            const storedColor = localStorage.getItem(`cartButtonColor_${index}`);

            if (storedColor) {
                button.style.backgroundColor = storedColor;
            }

            button.addEventListener('click', function () {
                button.style.backgroundColor = '#B7B597';
                localStorage.setItem(`cartButtonColor_${index}`, '#B7B597');
            });
        });
    }
});
