$(document).ready(function () {
    $('#newsletterForm').on('submit', function (e) {
        e.preventDefault(); // Evita que se recargue la página

        let form = this;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            $(form).addClass('was-validated');
        } else {
            // Mostrar el spinner
            $('#spinner').removeClass('d-none');

            // Simula envío con timeout
            setTimeout(function () {
                $('#spinner').addClass('d-none');
                alert('¡Gracias por suscribirte!');
                form.reset();
                $(form).removeClass('was-validated');
            }, 2000);
        }
    });
});
