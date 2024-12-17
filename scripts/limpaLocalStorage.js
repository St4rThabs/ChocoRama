document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.cart-btn'); 
    const cartIcon = document.querySelector('.fas.fa-shopping-cart');

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

    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            for (let i = 0; i < cartButtons.length; i++) {
                localStorage.removeItem(`cartButtonColor_${i}`);
            }

            cartButtons.forEach(button => {
                button.style.backgroundColor = '';
            });
        });
    }
});
