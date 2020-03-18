export default class Pedido {


    constructor(numPedido, fecha, hora, cliente,) {
        this._numPedido = numPedido;
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this.elementosPedidos = []
    }

    agregarElementos(elemento) {
        this.elementosPedidos.push(elemento);
    }

    listarElementos() {
        this.elementosPedidos.forEach((elemento) => {
            console.log(`${elemento.getDescripcion()}`)
        })
    }

    getResumen() {
        return `${this._fecha.getFecha()}, ${this._hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos`
    }

    getNumeroElementos() {
        return `${this.elementosPedidos.length}`;
    }

    getProductos() {
        let NumProductos = 0;
        this.elementosPedidos.forEach((elemento) => {
        NumProductos = (Number(NumProductos) + Number(elemento.getCantidad()));
        });
        return `${NumProductos}`
    }

    getCostototal() {
        let fullCost = 0;
        this.elementosPedidos.forEach((elemento) => {
            fullCost = (Number(fullCost) + Number(elemento.getTotal()));
        });
        return `${fullCost}`
    }

    getNumeroPedido(){
        return this._numPedido
    }

    _esIgualA(pedido){
        if(pedido.getNumeroPedido() == this._numPedido){ return true}
        else {return false}
    }
}