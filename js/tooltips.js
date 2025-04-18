// Inicializar tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

// Toggle de precios
$('input[name="precioToggle"]').on("change", function () {
  const tipo = this.id; // 'mensual' o 'anual'
  $(".precio").each(function () {
    const nuevoPrecio = $(this).data(tipo);
    $(this).text(`$${nuevoPrecio}`);
  });
});

// Resaltar columna completa al hacer hover
$("table").on("mouseenter", "td, th", function () {
  const index = $(this).index();
  $("tr").each(function () {
    $(this).children().eq(index).addClass("highlight");
  });
});

$("table").on("mouseleave", "td, th", function () {
  $("td, th").removeClass("highlight");
});