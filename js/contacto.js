//perar a que el documento esté completamente cargado
$(document).ready(function() {
    // Variables para los campos del formulario
    const $nombreInput = $('input[type="text"]');
    const $emailInput = $('#exampleFormControlInput1');
    const $telefonoInput = $('input[type="tel"]');
    const $mensajeTextarea = $('#exampleFormControlTextarea1');
    const $formulario = $('form');
    
    // Agregar un elemento form alrededor de los campos si no existe
    if ($formulario.length === 0) {
        $('.mb-3').wrapAll('<form id="contactoForm"></form>');
        $formulario = $('#contactoForm');
    }
    
    // Añadir div para el botón y spinner
    $('.col-6').append(`
        <div class="mb-3 d-flex justify-content-center">
            <button type="submit" class="btn btn-primary px-5" id="enviarBtn">Enviar mensaje</button>
            <div class="spinner-container ms-3" style="display: none;">
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
            </div>
        </div>
    `);
    
    // Crear el modal de confirmación
    $('body').append(`
        <div class="modal fade" id="confirmacionModal" tabindex="-1" aria-labelledby="confirmacionModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark" id="confirmacionModalLabel">¡Mensaje enviado!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-dark">
                        <p>Gracias por contactarnos. Tu mensaje ha sido enviado correctamente.</p>
                        <p>Nos pondremos en contacto contigo lo antes posible.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    `);
    
    // Función para validar correo electrónico
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Función para validar número de teléfono
    function validarTelefono(telefono) {
        // Acepta formatos comunes: 1234-567-890, (123) 456-7890, 123 456 7890, etc.
        const regex = /^[\d\s\-\(\)]{10,15}$/;
        return regex.test(telefono);
    }
    
    // Validación en tiempo real para el nombre
    $nombreInput.on("input", function() {
        if ($(this).val().trim().length < 3) {
            $(this).removeClass('is-valid').addClass('is-invalid');
            if (!$(this).next('.invalid-feedback').length) {
                $(this).after('<div class="invalid-feedback">Por favor ingresa un nombre válido (mínimo 3 caracteres).</div>');
            }
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });
    
    // Validación en tiempo real para el email
    $emailInput.on("input", function() {
        if (!validarEmail($(this).val())) {
            $(this).removeClass('is-valid').addClass('is-invalid');
            if (!$(this).next('.invalid-feedback').length) {
                $(this).after('<div class="invalid-feedback">Por favor ingresa un correo electrónico válido.</div>');
            }
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });
    
    // Validación en tiempo real para el teléfono
    $telefonoInput.on("input", function() {
        if (!validarTelefono($(this).val())) {
            $(this).removeClass('is-valid').addClass('is-invalid');
            if (!$(this).next('.invalid-feedback').length) {
                $(this).after('<div class="invalid-feedback">Por favor ingresa un número de teléfono válido.</div>');
            }
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });
    
    // Validación en tiempo real para el mensaje
    $mensajeTextarea.on("input", function() {
        if ($(this).val().trim().length < 10) {
            $(this).removeClass('is-valid').addClass('is-invalid');
            if (!$(this).next('.invalid-feedback').length) {
                $(this).after('<div class="invalid-feedback">Por favor ingresa un mensaje de al menos 10 caracteres.</div>');
            }
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });
    
    // Manejo del envío del formulario
    $(document).on('submit', '#contactoForm', function(e) {
        e.preventDefault();
        
        // Validar todos los campos antes de enviar
        let isValid = true;
        
        // Disparar eventos input para validar todos los campos
        $nombreInput.trigger('input');
        $emailInput.trigger('input');
        $telefonoInput.trigger('input');
        $mensajeTextarea.trigger('input');
        
        // Verificar si hay algún campo inválido
        if ($('.is-invalid').length > 0) {
            isValid = false;
        }
        
        if (isValid) {
            // Mostrar spinner
            $('.spinner-container').fadeIn();
            
            // Simular envío (con un timeout para demostración)
            setTimeout(function() {
                // Ocultar spinner
                $('.spinner-container').fadeOut();
                
                // Mostrar modal de confirmación
                $('#confirmacionModal').modal('show');
                
                // Limpiar formulario
                $('#contactoForm')[0].reset();
                $('.is-valid').removeClass('is-valid');
            }, 1500);
        }
    });
});