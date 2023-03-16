class Pedido {
    constructor(producto, precio, cantidad){
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }

    calcularSubtotal() {
         this.subTotal = this.precio * this.cantidad
    }

    calcularIva() {
         return this.subTotal * 0.21
    }

    calcularEnvio() {
         if (this.subTotal >= 15000) {
             this.envio = 0
         } else {
             this.envio = 1500
         }
    }

    calcularTotal() {
         this.total = this.subTotal + this.envio + this.calcularIva()
    }
}


function comprarProducto() {
    let productoId = 0;
    let nombreProducto = '';
    let cantidadProducto = 0;
    let precioProducto = 0;

    while(!productoId || productoId == 0 || productoId > 4) {
         productoId = parseInt(prompt("¿Qué producto desea comprar?:\n 1: Zapatillas($5000)\n 2:Remera($1800)\n 3:Jogger($2000)\n 4:Hoodie($7300)\n 5:Gorrito($1300)\n 6:Billetera($700)"));
    }

    switch(productoId){
        case 1:
            nombreProducto = "Zapatilla";
            precioProducto = 8000;
            break;
        case 2:
            nombreProducto = "Remera";
            precioProducto = 4800;
            break;
        case 3:
            nombreProducto = "Jogger";
            precioProducto = 6000;
            break;
        case 4:
            nombreProducto = "Hoodie";
            precioProducto = 7300;
            break;
        case 5:
            nombreProducto = "Gorrito";
            precioProducto = 1300;
            break;
        case 6:
            nombreProducto = "Billetera";
            precioProducto = 700;
            break;
    }

     while(!cantidadProducto || cantidadProducto === 0){
         cantidadProducto = parseInt(prompt("Producto elegido: "+ nombreProducto + "\n Introduzca la cantidad deseada.(sólo números)"));
    }
     const compra = new Pedido(nombreProducto, precioProducto, cantidadProducto)
     return compra
}

alert("Bienvenida/o a StreetWear!");

const pedido = comprarProducto()

 // Calculamos el subtotal
pedido.calcularSubtotal()

 // Calculamos el precio de envío
pedido.calcularEnvio()

// // Calculamos el total
pedido.calcularTotal()

console.log(pedido)


// Muestro por medio de alert() el detalle de la compra con los valores actualizados
alert("Detalle del pedido:\n\n"+
    "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    "- IVA 21%: $" + pedido.calcularIva() + "\n" +
    "- Costo de envío: $" + pedido.envio + "\n\n" +
    "Total = $" + pedido.total
);