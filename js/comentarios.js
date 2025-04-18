$(document).ready(function () {
    $('.btn-responder').on('click', function () {
        const nombre = $(this).closest('.comentario').find('h5').text();
        alert(`Vas a responder a: ${nombre}`);
    });

    $('.btn-destacar').on('click', function () {
        const comentario = $(this).closest('.comentario');
        comentario.toggleClass('destacado');
    });
});