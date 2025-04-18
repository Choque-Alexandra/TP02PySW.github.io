document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll(".category-link");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Tomamos el filtro seleccionado
            const filter = this.getAttribute("data-filter");

            // Seleccionamos todas las tarjetas dentro de la sección de noticias
            const allCards = document.querySelectorAll(".news .col-sm-4");

            allCards.forEach(card => {
                // Si el filtro es 'all' mostramos todo
                if (filter === "all") {
                    card.style.display = "block";
                } else {
                    // Si la tarjeta tiene la clase correspondiente, la mostramos
                    if (card.classList.contains(filter)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });

            // Actualizamos visualmente qué categoría está activa (opcional)
            categoryLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});