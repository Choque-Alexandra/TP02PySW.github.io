$(document).ready(function() {
    // Animación al pasar el ratón sobre la tarjeta
    $(".gym-card").hover(
        function() {
            // Cuando el ratón entra
            $(this).animate({
                top: "-15px"
            }, 200);
            $(this).css({
                "box-shadow": "0 15px 20px rgb(211, 255, 15)"
            });
        },
        function() {
            // Cuando el ratón sale
            $(this).animate({
                top: "0"
            }, 200);
            $(this).css({
                "box-shadow": "0 4px 6px rgba(56, 190, 231, 0.77)"
            });
        }
    );
    
    // Animación para los botones
    $(".card-btn").hover(
        function() {
            $(this).animate({
                padding: "8px 20px"
            }, 200);
        },
        function() {
            $(this).animate({
                padding: "6px 12px"
            }, 200);
        }
    );
    
    // Animación de entrada para las tarjetas al cargar la página
    $(".gym-card").css({
        opacity: 5,
        transform: "translateY(50px)"
    });
    
    // Muestra las tarjetas con un efecto de cascada
    $(".gym-card").each(function(index) {
        const card = $(this);
        setTimeout(function() {
            card.animate({
                opacity: 1
            }, 500);
            card.css({
                transform: "translateY(0)"
            });
        }, index * 200); // Cada tarjeta aparece con 200ms de diferencia
    });
});