export default class Restaurante {


    constructor(nombre, telefono, direccion, productos, pedidos) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._direccion = direccion;
    this.productos = [];
    this.pedidos = [];
    }

    registrarProducto(producto) {
        this.productos.push(producto);
    }

    listarProducto() {
        this.productos.forEach((elemento,i) => {
            console.log(`${i + 1}. ${elemento.getDescripcion()}`)
        })
    }

    registrarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    listarPedido() {
        this.pedidos.forEach((elemento,i) => {
            console.log(`${i + 1}. ${elemento.getResumen()}`)
        })
    }
}