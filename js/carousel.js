$(document).ready(function() {
    // Configuración personalizada para el carousel
    const carouselOptions = {
        interval: 2000,          // Tiempo en milisegundos entre cada slide (3 segundos)
        autoplay: true,          // Iniciar automáticamente
        pauseOnHover: true,      // Pausar al pasar el mouse por encima
        keyboard: true,          // Permitir control con teclado
        touch: true,             // Permitir control táctil
        wrap: true,              // Continuar desde el principio al llegar al final
        fadeTransition: false    // Usar efecto fade en lugar de slide (requiere CSS adicional)
    };

    // Inicializar el carousel con Bootstrap
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
        interval: carouselOptions.interval,
        keyboard: carouselOptions.keyboard,
        pause: carouselOptions.pauseOnHover ? 'hover' : false,
        ride: carouselOptions.autoplay ? 'carousel' : false,
        wrap: carouselOptions.wrap,
        touch: carouselOptions.touch
    });

    // Añadir eventos personalizados con jQuery
    
    // Pausa al hacer hover si la opción está activada
    if (carouselOptions.pauseOnHover) {
        $('#carouselExample').hover(
            function() {
                carousel.pause();
            },
            function() {
                if (carouselOptions.autoplay) {
                    carousel.cycle();
                }
            }
        );
    }

    // Agregar efecto de transición fade si está activado
    if (carouselOptions.fadeTransition) {
        $('.carousel-item').addClass('carousel-fade');
    }

    // Métodos públicos que puedes usar desde fuera para controlar el carousel
    window.carouselControl = {
        play: function() {
            carousel.cycle();
            carouselOptions.autoplay = true;
        },
        pause: function() {
            carousel.pause();
            carouselOptions.autoplay = false;
        },
        next: function() {
            carousel.next();
        },
        prev: function() {
            carousel.prev();
        },
        setInterval: function(newInterval) {
            carouselOptions.interval = newInterval;
            // Reiniciar con el nuevo intervalo
            carousel.dispose();
            const newCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
                interval: carouselOptions.interval,
                keyboard: carouselOptions.keyboard,
                pause: carouselOptions.pauseOnHover ? 'hover' : false,
                ride: carouselOptions.autoplay ? 'carousel' : false,
                wrap: carouselOptions.wrap,
                touch: carouselOptions.touch
            });
            carousel = newCarousel;
        }
    };

    // Si quieres añadir indicadores de forma dinámica
    const addIndicators = function() {
        // Crear el contenedor de indicadores
        const indicatorsContainer = $('<div class="carousel-indicators"></div>');
        
        // Obtener la cantidad de slides
        const slidesCount = $('#carouselExample .carousel-item').length;
        
        // Crear un botón indicador para cada slide
        for (let i = 0; i < slidesCount; i++) {
            const indicator = $('<button type="button" data-bs-target="#carouselExample" data-bs-slide-to="' + i + '"' + 
                               (i === 0 ? ' class="active" aria-current="true"' : '') + 
                               ' aria-label="Slide ' + (i + 1) + '"></button>');
            indicatorsContainer.append(indicator);
        }
        
        // Agregar los indicadores al carousel
        $('#carouselExample').prepend(indicatorsContainer);
    };
    
    // Descomenta la siguiente línea si quieres añadir indicadores
    // addIndicators();
});