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

document.querySelector('.checkout-button').addEventListener('click', function () {
    Swal.fire({
        title: "No implementado aún",
        icon: "warning",
        confirmButtonText: "Aceptar"
    });
});

document.getElementById('cupon-button').addEventListener('click', aplicarCupon);

function aplicarCupon() {
    const cuponInput = document.getElementById('cupon-input');
    const cuponButton = document.getElementById('cupon-button');
    const cupon = cuponInput.value;

    // Verificar validez del cupón y aplicar descuento si corresponde
    if (cupon === 'DESCUENTO10') {
        const totalElement = document.querySelector('.cart-total h4');
        const totalText = totalElement.textContent;
        const total = parseFloat(totalText.replace(/[^\d.]/g, '')); // Obtener el valor numérico del total eliminando caracteres no numéricos

        const descuento = total * 0.1; // Calcular el descuento (10%)
        const nuevoTotal = total - descuento; // Calcular el nuevo total con descuento

        totalElement.textContent = 'Total: $' + nuevoTotal.toFixed(2); // Actualizar el elemento con el nuevo total
        cuponInput.value = ''; // Limpiar el campo de cupón
        Swal.fire({
            title: 'Cupón aplicado',
            text: 'Se ha aplicado un descuento del 10% al total.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        cuponButton.disabled = true;
    } else {
        Swal.fire({
            title: 'Cupón inválido',
            text: 'El cupón ingresado no es válido.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
}