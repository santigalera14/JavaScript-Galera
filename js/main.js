const carrito = [];

const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio);
    mostrarListaOrdenada();
}

const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
}

const comprarProductos = (listaDeProductos) => {
    let otroProducto;
    let productoNombre = '';
    let productoCantidad = 0;

    do {
        productoNombre = prompt ('Que producto desea comprar?'+'\n\n'+listaDeProductos.join('\n'));
        productoCantidad = parseInt(prompt('Cuantos desea comprar?'));

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre)

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert('El producto no se encuentra en el catalogo.')
        }

        otroProducto = confirm('Desea agregar otro producto?');
    } while (otroProducto)

    confirmarCompra()
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad;
    }
    console.log(carrito);
} 

const eliminarProductoCarrito = (productoNombre) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoNombre,toLowerCase()){
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaCarrito = carrito.map(producto =>{
        return '- '+producto.nombre+' | Cantidad: '+producto.cantidad
 });

    const confirmar = confirm('Checkout: '
        +'\n\n'+listaCarrito.join('\n')
        +'\n\n Para continuar presione "Aceptar" sino "Cancelar" para eliminar un producto.'
    )
    
    if (confirmar) {
        finalizarCompra (listaCarrito)
    } else {
        const productoEliminar = prompt ('Ingrese el nombre del producto a eliminar: ')
        eliminarProductoCarrito (productoEliminar)
    }
};

const finalizarCompra = (listaCarrito) => {
    const cantidadTotal = carrito.reduce ((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito. reduce ((acc, item) => acc +(item.precio * item.cantidad), 0)

    alert('Detalle de la compra: '
        +'\n\n'+listaCarrito.join('\n')
        +'\n\n El total de productos: '+cantidadTotal
        +'\n\n El total de compra es: '+precioTotal
        +'\n\n Gracias por su compra!'
    )
};

const comprar = () => {
    const productosStretWear = confirm('Queres ordenar los productos del mas barato al mas caro?')

    if (productosStretWear) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
}

comprar ()