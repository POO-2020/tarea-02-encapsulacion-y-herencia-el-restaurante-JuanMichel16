export default class Cliente {

    /**
     * 
     * @param {Nombre} nombre 
     * @param {String} direccion 
     * @param {Number} telefono 
     */

    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    getPerfil() {
        return `Nombre: ${this._nombre}, Direccion: ${this._direccion.getFormatoCorto()}, Telefono: ${this._telefono}. `
    }
}