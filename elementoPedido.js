export default class ElementoPedido {

    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */

    constructor(producto, cantidad) {
        this._producto = producto;
        this._cantidad = cantidad;
    }

    getTotal() {
        return `${this._cantidad * this._producto.getPrecio()}`
    }

    getDescripcion() {
        return `${this._cantidad} x ${this._producto.getNombre()} ${this.getTotal()} `
    }

    getCantidad() {
        return `${this._cantidad}`
    }

}