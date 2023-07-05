const links = document.querySelectorAll('a[href="#"]');

const handleClick = (event) => {
    event.preventDefault();

    Swal.fire({
        title: "No implementado aún",
        icon: "warning",
        confirmButtonText: "Aceptar"
    });
};

links.forEach(link => {
    link.addEventListener('click', handleClick);
});

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');

    const hidePreloader = () => {
        preloader.classList.add('hidden');
    };

    setTimeout(hidePreloader, 500);
});

document.getElementById('cupon-button').addEventListener('click', aplicarCupon);

function aplicarCupon() {
    const cuponInput = document.getElementById('cupon-input');
    const cuponButton = document.getElementById('cupon-button');
    const cupon = cuponInput.value;

    if (cupon === 'DESCUENTO10') {
        const totalElement = document.querySelector('.cart-total h4');
        const totalText = totalElement.textContent;
        const total = parseFloat(totalText.replace(/[^\d.]/g, ''));

        const descuento = total * 0.1;
        const nuevoTotal = total - descuento;

        totalElement.textContent = 'Total: $' + nuevoTotal.toFixed(2);
        cuponInput.value = '';
        Swal.fire({
            title: 'Cupón aplicado',
            text: 'Se ha aplicado un descuento del 10% al total.',
            icon: 'success',
            html: 'Me cerraré en <b></b> milisegundos.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        });

        cuponButton.disabled = true;
    } else {
        Swal.fire({
            title: 'Cupón inválido',
            text: 'El cupón ingresado no es válido.',
            icon: 'error',
            html: 'Me cerraré en <b></b> milisegundos.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        });
    }
}

const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', function () {
    Swal.fire({
        title: "No implementado aún",
        icon: "warning",
        confirmButtonText: "Aceptar"
    });
});