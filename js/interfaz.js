class Interfaz {
    constructor() {
        // inicializa la app al instanciar
        this.init();
        // leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // método para cuando inicialice la app
    init() {

    }
    // imprimir categorías
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias();
    }
}