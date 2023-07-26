class Proveedor {

  constructor(nombre = "Esteban", email = "estemontoya@outlook.com", telefono = 5548364465) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }


  getNombre() {
    return this.nombre;
  }
  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  getEmail() {
    return this.email;
  }
  setEmail(nuevoEmail) {
    this.email = nuevoEmail;
  }

  getTelefono() {
    return this.telefono;
  }
  setTelefono(nuevoTelefono) {
    this.telefono = nuevoTelefono;
  }
}

class Articulo {
  constructor(nombre = "Celular" , proveedor = new Proveedor(), precio = 23000) {
    this.nombre = nombre;
    this.proveedor = proveedor;
    this.precio = precio;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  getProveedor() {
    return this.proveedor;
  }
  set Proveedor(nuevoProveedor) {
    this.proveedor = nuevoProveedor;
  }

  getPrecio() {
    return this.precio;
  }
  setPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }

  telefono() {
    return {
      nombre: this.proveedor.nombre,
      telefono: this.proveedor.telefono,
    };
  }
}

let proveedor1 = new Proveedor("Proveedor A", "proveedorA@example.com", "123456789");
let articulo1 = new Articulo("Artículo 1", proveedor1, 10.99);

  console.log(new Proveedor());
  console.log(new Articulo());

 console.log(proveedor1);
 console.log(articulo1);

  console.log("Proveedor:");
  console.log("Nombre:", proveedor1.nombre);
  console.log("Email:", proveedor1.email);
  console.log("Teléfono:", proveedor1.telefono);

  console.log("\nArtículo:");
  console.log("Nombre:", articulo1.nombre);
  console.log("Proveedor:", articulo1.proveedor.nombre);
  console.log("Precio:", articulo1.precio);
