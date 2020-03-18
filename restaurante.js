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

    buscarPedido(pedido){
        let buscar = this.pedidos.find(encontarPedido => encontarPedido._esIgualA(pedido))
        if(buscar == undefined){return null}
        else {return buscar}
    }

    eliminarPedido(pedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let i = this.pedidos.indexOf(encontrar)
        this.pedidos.splice(i,1)
        return true
        }
    }

    modificarPedido(pedido, nuevoPedido){
        let encontrar =  this.buscarPedido(pedido)
        if(encontrar == null) return false
        else {
        let i = this._pedidos.indexOf(encontrar)
        this.pedidos[i] = nuevoPedido
        return true
        }
    }
}