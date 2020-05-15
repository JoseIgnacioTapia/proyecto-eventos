class EventBrite {
    constructor() {
        this.token_auth = '34IIEJUV3JMUWL4G2WUN';
        this.ordenar = 'date';
    }
    // mostrar resultados de la búsqueda
    async obtenerEventos(evento, categoria) {
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

        // esperar la respuesta del evento y devolverlo como JSON
        const eventos = await respuestaEvento.json();

        return {
            eventos
        }
    }

    // obtiene las categorías en init()
    async obtenerCategorias() {
        // consultar las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // esperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();

        // devolvemos el resultado
        return {
            categorias
        }
    }
}