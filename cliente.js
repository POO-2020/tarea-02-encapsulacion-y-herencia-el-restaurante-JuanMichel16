export default class Cliente {


    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    getPerfil() {
        return `Nombre: ${this._nombre}, Direccion: ${this._direccion.getFormatoCorto()}, Telefono: ${this._telefono}. `
    }
}