class Interfaz {
    constructor() {
        // inicializa la app al instanciar
        this.init();
        // leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // método para cuando inicialice la app
    init() {
        // llamar a imprimir categorias de la REST API
        this.imprimirCategorias();
    }
    // imprimir categorías
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;
                // seleccionar el select de categorias
                const selectCategoria = document.getElementById('listado-categorias');

                // recorremos el arreglo e imprimimos los <option>
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategoria.appendChild(option);
                });
            })
    }
}