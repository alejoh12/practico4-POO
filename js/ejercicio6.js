/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    #isbn;
    #titulo;
    #autor;
    #pagina;
    constructor(isbnParam, tituloParam, autorParam, paginaParam) {
        this.#isbn = isbnParam;
        this.#titulo = tituloParam;
        this.#autor = autorParam;
        this.#pagina = paginaParam;
    }

    get isbn() {
        return this.#isbn;
    }
    set isbn(nuevoIsbn) {
        this.#isbn = nuevoIsbn;
    }
    
    get titulo() {
        return this.#titulo;
    }
    set titulo(nuevoTitulo) {
        this.#titulo = nuevoTitulo;
    }

    get autor() {
        return this.#autor;
    }
    set autor(nuevoAutor) {
        this.#autor = nuevoAutor;
    }

    get pagina() {
        return this.#pagina;
    }
    set pagina(nuevoPagina) {
        this.#pagina = nuevoPagina;
    }

    mostrarLibro() {
        document.write(`<p>"El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.pagina}"
        </p>`);
    }
}

const biblia = new Libro(9781414302034,"La Biblia","Dios",346);

biblia.mostrarLibro();

const harryPotter = new Libro(9780807286005,"Harry Potter y La Piebra Filosofal","Joanne Kathleen Rowling",254);

harryPotter.mostrarLibro();

if(biblia.pagina > harryPotter.pagina) {
    document.write(`<h3>El libro '${biblia.titulo}' tiene más páginas que el libro '${harryPotter.titulo}'.</h3>`);
}else {
    document.write(`<h3>El libro '${harryPotter.titulo}' tiene más páginas que el libro '${biblia.titulo}'.</h3>`);
}