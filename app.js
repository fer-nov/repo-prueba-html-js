let opcion;

do {
    opcion = prompt (
        "MENÚ\n" +
        "1 Saludar\n" +
        "2 Mostrar fecha\n" +
        "3 Salir\n\n" +
        "Elegí una opción: "
    );

    if (opcion === "1") {
        alert("Hola!");
    } else if (opcion === "2") {
        alert("Hoy es viernesrupo silva");
    } else if (opcion === "3") {
        alert("Chau");
    } else {
        alert("Opción inválida");
    }
} while (opcion !== "3");