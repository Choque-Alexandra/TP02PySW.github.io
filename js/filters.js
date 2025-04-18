// Este script normalmente estaría en un archivo externo js/scripts.js
$(document).ready(function() {
    // Inicializar Masonry
    var $grid = $('.gallery').masonry({
        itemSelector: '.gallery-item',
        percentPosition: true,
        columnWidth: '.gallery-item'
    });
    
    // Asegurar que las imágenes carguen antes de aplicar Masonry
    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });
    
    // Efecto Zoom en tarjetas
    $('.gallery-item').hover(
        function() {
            $(this).find('.item-overlay').css('opacity', '1');
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).find('.item-overlay').css('opacity', '0');
            $(this).css('transform', 'scale(1)');
        }
    );
    
    // Sistema de filtrado corregido
    $('.filter-btn').click(function() {
        // Actualizar botones activos
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Obtener categoría seleccionada
        var category = $(this).attr('data-category');
        
        if (category === 'all') {
            // Mostrar todos los elementos
            $('.gallery-item').show();
        } else {
            // Ocultar todos y mostrar solo los de la categoría seleccionada
            $('.gallery-item').hide();
            $('.gallery-item.' + category).show();
        }
        
        // Reorganizar la galería después de filtrar
        setTimeout(function() {
            $grid.masonry('layout');
        }, 100);
    });
    
    // Scroll suave
    $('a.nav-link').click(function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            
            // Cerrar navbar en móvil
            $('.navbar-collapse').collapse('hide');
        }
    });
});