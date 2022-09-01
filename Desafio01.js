class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(nombre) {
        this.mascotas.push(nombre)
    }
    countMascotas() {
        return `${this.getFullName()} tiene ${this.mascotas.length} mascotas`
    }
    addBook(nombre, autor) {
        let book = { nombre: nombre, autor: autor }
        return this.libros.push(book)
    }
    getBookNames() {
        let bookNames = this.libros.map((libro) => {
            return libro.nombre
        })
        return `Los libros de ${this.getFullName()} son: ${bookNames}`
    }
}

const usuario01 = new Usuario("Lisandro", "Carbone")

usuario01.addMascotas("Greta")
usuario01.addMascotas("Bonnie")
usuario01.addBook("Hamlet", "Shakespeare")
usuario01.addBook("Odisea", "Homero")
console.log(usuario01)
console.log(usuario01.countMascotas());
console.log(usuario01.getBookNames());