let pedido = [];

let pizzas = [
    { id: 1, nombre: "Muzzarella", precio: 10000 },
    { id: 2, nombre: "Napolitana", precio: 12000 },
    { id: 3, nombre: "Fugazetta", precio: 13000 }
];

let empanadas = [
    { id: 1, nombre: "Carne", precio: 14000 },
    { id: 2, nombre: "Pollo", precio: 15000 },
    { id: 3, nombre: "Jamón y Queso", precio: 16000 }
];

let pastas = [
    { id: 1, nombre: "Boloñesa", precio: 7000 },
    { id: 2, nombre: "Pesto", precio: 8000 },
    { id: 3, nombre: "Pomodoro", precio: 9000 }
];

//Calcula el total del pedido
const calcularTotal = () => {
    let total = 0;
    for (let item of pedido) {
      total += item.precio;
    };
    return total;
};

//let totalFinal = calcularTotal();
//alert(`El total final a pagar es: $${totalFinal}`);

//FUNCIÓN PEDIDO PIZZA
const agregarAlPedidopizza = (opcionPizza) => {
    let index = parseInt(opcionPizza) - 1;
    if (index >= 0 && index < pizzas.length) {
        let producto = pizzas[index];
        pedido.push(producto);

        let totalParcial = calcularTotal();

        alert(
        `Agregaste: ${producto.nombre}\n` +
        `Precio: $${producto.precio}\n` +
        `Total del pedido: $${totalParcial}`
        );
    } else {
        alert("Operación inválida");
    };
};
//FUNCIÓN PEDIDO EMPANADAS
const agregarAlPedidoEmp = (pedidoEmp) => {
    let index = parseInt(pedidoEmp) - 1;

    if (index >= 0 && index < empanadas.length) {
        let producto = empanadas[index];
        pedido.push(producto);

        let totalParcial = calcularTotal();

        alert(
        `Agregaste: ${producto.nombre}\n` +
        `Precio: $${producto.precio}\n` +
        `Total del pedido: $${totalParcial}`
        );
    } else {
        alert("Operación inválida");
    }
};
//FUNCIÓN PEDIDO PASTA
const agregarAlPedidoPasta = (pedidoPasta) => {
    let index = parseInt(pedidoPasta) - 1;

    if (index >= 0 && index < pastas.length) {
        let producto = pastas[index];
        pedido.push(producto);

        let totalParcial = calcularTotal();

        alert(
        `Agregaste: ${producto.nombre}\n` +
        `Precio: $${producto.precio}\n` +
        `Total del pedido: $${totalParcial}`
        );
    } else {
        alert("Operación inválida");
    }
};

let opcion;

do {
    opcion = prompt(
        "BIENVENIDO A NUESTRO RESTAURANTE \n" + 
        "INGRESÁ A NUESTRO MENÚ\n" +
        "1) Pizzas \n" +
        "2) Empanadas \n" +
        "3) Pastas \n" +
        "4) Ver pedido \n" +
        "5) Ver total \n" +
        "6) Salir"
    );

    switch (opcion) {
        case "1":

            let opcionPizza;
            do {
                opcionPizza = prompt (
                    "1) 1 Muzzarella ($10.000) \n" +
                    "2) 1 Napolitana ($12.000) \n" +
                    "3) 1 Fugazetta ($13.000) \n" +
                    "4) Volver atrás"
                );
                switch (opcionPizza) {
                    case "1":
                    case "2":
                    case "3":
                        pedidoPizza = agregarAlPedidopizza(opcionPizza);
                        break;
                    case "4":
                        break;
                    default:
                        alert("Opción inválida");
                        break;
                    
                };
            } while (opcionPizza !== "4");
            break;
        case "2":

            let opcionEmp;
            do {
                opcionEmp = prompt (
                    "1) Carne        ($14.000)(12) \n" +
                    "2) Pollo         ($15.000)(12) \n" +
                    "3) Jamón y Queso ($16.000)(12) \n" +
                    "4) Volver atrás"
                );
                switch (opcionEmp) {
                    case "1":
                    case "2":
                    case "3":
                        pedidoEmp = agregarAlPedidoEmp(opcionEmp);
                        break;
                    case "4":
                        break;
                    default:
                        alert("Opción inválida");
                        break; 
                };
            } while (opcionEmp !== "4");
            break;

        case "3":

            let opcionPasta;
            do {
                opcionPasta = prompt (
                    "1) Boloñesa ($7.000) \n" +
                    "2) Pesto ($8.000) \n" +
                    "3) Pomodoro ($9.000) \n" +
                    "4) Volver atrás"
                );
                switch (opcionPasta) {
                    case "1":
                    case "2":
                    case "3":
                        pedidoPasta = agregarAlPedidoPasta(opcionPasta);
                        break;
                    case "4":
                        break;
                    default:
                        alert("Opción inválida");
                        break;
                    
                };
            } while (opcionPasta !== "4");
            break;
        case "4":
            //alert("El pedido se mostrará por Consola, gracias!");
            //console.log("Pedido actual:", pedido);
            if ( pedido == 0 ) {
                alert("Aún no seleccionaste nada del Menú!");
            } else {
                alert("El pedido se mostrará por Consola, gracias!");
                console.log("PEDIDO ACTUAL: ", pedido)
            }
            break;
        case "5":
            let totalFinal = calcularTotal();
            //alert(`El total a pagar es: $${totalFinal}`);
            if (totalFinal == 0 ) {
                alert("No hay nada que pagar, el pedido está vacio")
            } else {
                alert(`El total a pagar es: $${totalFinal}`);
            };
            break;
        case "6":
            alert("GRACIAS POR VISITARNOS, VOLVÉ PRONTO!");
            break;
        default:
            alert("¡Opcion no válida!");
        break;
    };

} while (opcion !== "6");