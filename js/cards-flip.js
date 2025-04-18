  $(document).ready(function () {
    // Animar barras de progreso
    $(".progress-bar").each(function () {
      const value = $(this).data("value");
      $(this).animate(
        { width: value + "%" },
        {
          duration: 1500,
          step: function (now) {
            $(this).text(Math.floor(now) + "%");
          },
        }
      );
    });

    // Sistema de estrellas
    $(".stars input[type='radio']").on("change", function () {
      const rating = $(this).val();
      const container = $(this).closest("div").next(".rating-value");
      container.text("Calificación: " + rating + " estrella" + (rating > 1 ? "s" : ""));
    });
  });
