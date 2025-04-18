// Sistema de filtrado corregido
$('.filter-btn').click(function () {
    // Actualizar botones activos
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Obtener categoría seleccionada
    var category = $(this).attr('data-category');

    if (category === 'all') {
        // Mostrar todos los elementos
        $('.gallery-item').show();

        // Quitar clase de tamaño uniforme para volver al tamaño original
        $('.gallery-item .card').removeClass('uniform-size');

        // Relayout de Masonry
        $grid.masonry('reloadItems');
        $grid.masonry('layout');
    } else {
        // Ocultar todos los elementos
        $('.gallery-item').hide();

        // Mostrar solo los de la categoría seleccionada
        $('.gallery-item.' + category).show();

        // Aplicar tamaño uniforme a las tarjetas filtradas
        $('.gallery-item .card').addClass('uniform-size');

        // Relayout de Masonry
        $grid.masonry('reloadItems');
        $grid.masonry('layout');
    }

    // Reorganizar la galería después de filtrar con un pequeño tiempo para asegurar que los cambios se apliquen
    setTimeout(function () {
        $grid.masonry('layout');
    }, 100);
});
