const links = document.querySelectorAll('a[href="#"]');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        Swal.fire({
            title: "No implementado aún",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');

    function hidePreloader() {
        preloader.classList.add('hidden');
    }

    setTimeout(hidePreloader, 2000); // Simulación de tiempo de carga
});