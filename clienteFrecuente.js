export default class ClienteFrecuente extends Cliente {


    constructor(nombre, direccion, telefono,numCliente,fechaRegistro) {
        super(nombre,direccion,telefono);
        this._numCliente = numCliente;
        this._fechaRegistro = fechaRegistro;

    }

}