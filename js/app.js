// instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;


    // revisar que haya algo escrito en el buscador
    if (textoBuscador !== '') {
        // cuando si hay una busqueda
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                if(eventos.eventos.events.length > 0) {
                    // Si hay eventos, mostrar el resultado
                    ui.limpiarResultados();
                    ui.mostrarEventos(eventos.eventos);
                } else {
                    // no hay eventos enviar un alerta
                    ui.mostrarMensaje('no hay resultados', 'alert alert-danger mt-4');
                }
            })
    } else {
        // Mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
});
