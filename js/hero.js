$(document).ready(function() {
    // Función que ejecuta la animación
    function playAnimation() {
        // Primero ocultamos los elementos para poder mostrarlos de nuevo
        $("#overlay").hide();
        $("#content").hide();
        
        // Ahora ejecutamos la animación
        $("#overlay").fadeIn(1000, function() {
            // Cuando el overlay termina de aparecer, mostramos el contenido con slideDown
            $("#content").slideDown(800);
        });
    }
    
    // Ejecutar la animación una vez al cargar la página
    playAnimation();
    
    // Configurar para que la animación se repita cada 2 segundos (2000 milisegundos)
    setInterval(playAnimation, 4000);  // 4000ms = 2s para la animación + 2s de espera
});