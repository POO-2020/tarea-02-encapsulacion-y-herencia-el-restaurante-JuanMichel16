import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";
import Direccion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Restaurante from "./restaurante.js";


class Main {
    constructor() {
        this.fecha1 = new Fecha(20,9,2015);

        this.tiempo1 = new Tiempo(10,20,"PM");

        this.precio1 = new Precio(400.50);

        this.producto1 = new Producto("Camarones",
                                new Precio(500.00)
                                );

        this.producto2 = new Producto("Sandia",
                                new Precio(45.7)
                                );

        this.producto3 = new Producto("Tacos", 
                                new Precio(20)
                                );

        this.elementoPedido1 = new ElementoPedido(
                            new Producto("Cebolla",
                            new Precio(20)
                            ),
                            10);

        this.elementoPedido2 = new ElementoPedido(
                            new Producto("Aguacate",
                            new Precio(40)
                            ),
                            3);

        this.elementoPedido3 = new ElementoPedido(
                            new Producto("Hamburguesa",
                            new Precio(100)
                            ),
                            2);

        this.direccion1 = new Direccion("Alias Arias",
                                            "#18",
                                            "#18",
                                            "Centro",
                                            28750,
                                            "Colima",
                                            "Minatitlan")

        this.cliente1 = new Cliente("Juan Michel Vargas",
                        new Direccion(
                            "Benito Juarez",
                            "#20",
                            "#20",
                            "Centro",
                            1234456,
                            "Colima",
                            "Las vegas"),
                            543512345);

        this.pedido1 = new Pedido(1,
                        new Fecha(12,3,2020),
                        new Tiempo(10,40, "AM"),
                        new Cliente("Tacuache",
                        new Direccion(
                            "Jose Vazconselos",
                            "#20",
                            "#20",
                            "Centro",
                            21342143,
                            "Guadalajara",
                            "Tuxpan"),
                            4567457)
        );

        this.pedido2 = new Pedido(2,
                            new Fecha(15,4,1997),
                            new Tiempo(6,20,"PM"),
                            new Cliente("Tarasco",
                            new Direccion(
                                "Calle1",
                                "#23",
                                "#23",
                                "sur",
                                79578456,
                                "tangamangapio",
                                "Machupichu"),
                                47353465)
        );

        this.pedido3 = new Pedido(3,
                            new Fecha(20,3,2014),
                            new Tiempo(7,45,"PM"),
                            new Cliente("Hector",
                            new Direccion(
                                "Calle4",
                                "#456",
                                "#456",
                                "oeste",
                                79234235,
                                "launcher",
                                "pirata"),
                                67345)
        );

        this.restaurante1 = new Restaurante("Mecalopolis", 456234124346, new Direccion(
                                                                                "fafasdfs",
                                                                                20,
                                                                                34,
                                                                                "Centro",
                                                                                4536345673,
                                                                                "Coronavirus",
                                                                                "azeroth")
                                                                                );
    }

    probarFecha() {
        console.log(`Anos: ${this.fecha1.getAños()} `);
        console.log(`Meses: ${this.fecha1.getMeses()} `);
        console.log(`Semanas: ${this.fecha1.getSemanas()}`);
        console.log(`Dias: ${this.fecha1.getDias()}`);
        console.log(this.fecha1.getFecha());
        console.log(this.fecha1.getDiaFecha());
    }

    probarTiempo() {
        console.log(this.tiempo1.getFormato12());
        console.log(this.tiempo1.getFormato24());
    }

    probarPrecio() {
        console.log(`El precio es: $ ${this.precio1.getPrecio()}`)
    }

    probarProducto() {
        console.log(this.producto1.getDescripcion());
    }

    probarElementoPedido() {
        console.log(this.elementoPedido1.getDescripcion());
    }

    probarDireccion() {
        console.log(this.direccion1.getFormatoCorto());
        console.log(this.direccion1.getFormatoExtendido());
    }

    probarCliente() {
        console.log(this.cliente1.getPerfil());
    }

    probarPedido() {
        this.pedido1.agregarElementos(this.elementoPedido1);
        this.pedido1.agregarElementos(this.elementoPedido2);
        this.pedido1.agregarElementos(this.elementoPedido3);
        this.pedido1.listarElementos();
        console.log(this.pedido1.getResumen() );
        console.log(`${this.pedido1.getNumeroElementos()} elementos`);
        console.log(`${this.pedido1.getProductos()} productos`);
        console.log(`Total: ${this.pedido1.getCostototal()} `);
    }


    probarRestaurante() {
        this.restaurante1.registrarProducto(this.producto1);
        this.restaurante1.registrarProducto(this.producto2);
        this.restaurante1.registrarProducto(this.producto3);
        this.restaurante1.listarProducto();

        this.restaurante1.registrarPedido(this.pedido1);
        this.restaurante1.registrarPedido(this.pedido3);
        this.restaurante1.registrarPedido(this.pedido2);
        this.restaurante1.listarPedido();
    }
}

let probar = new Main();
probar.probarFecha();
probar.probarTiempo();
probar.probarPrecio();
probar.probarProducto();
probar.probarElementoPedido();
probar.probarDireccion();
probar.probarCliente();
probar.probarPedido();
probar.probarRestaurante();