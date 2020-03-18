export default class Direccion {


    constructor(calle, numInterior, numExterior, colonia, codigoPostal, ciudad, municipio) {
        this._calle = calle;
        this._numInterior = numInterior;
        this._numExterior = numExterior;
        this._colonia = colonia;
        this._codigoPostal = codigoPostal;
        this._ciudad = ciudad;
        this._municipio = municipio;
    }

    getFormatoCorto() {
        return `${this._calle} ${this._numExterior}`
    }

    getFormatoExtendido() {
        return `${this._calle} ${this._numExterior}, ${this._colonia}, ${this._codigoPostal}. ${this._municipio}, ${this._ciudad}. `
    }
}