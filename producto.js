export default class Producto {

    /**
     * 
     * @param {String} nombre 
     * @param {precio} precio 
     */

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }

    getDescripcion() {
        return `${this._nombre}, $ ${this._precio.getPrecio()}`
    }

    getNombre() {
        return `${this._nombre}`
    }

    getPrecio() {
        return `${this._precio.getPrecio()}`
    }

}