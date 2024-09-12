const display = document.getElementById('elementos')
const suma = document.getElementById('suma');
let misProductos = []

function Producto(nomb, cant, prec){
    this.nombre = nomb;
    this.cantidad = cant;
    this.precio = prec;
    this.getInfo = () => {
        return `<td>${this.nombre}</td><td>${this.cantidad}</td><td>${this.precio}</td>`
    }
}

const addProducto = (nombre, cantidad,precio) => {
    let nProd = new Producto(nombre,cantidad,precio);
    misProductos.push(nProd);
}

addProducto("Papas", 4,2.5)
addProducto("Camotes", 5,1.2)

const updateTable = () => {
    let elementos = misProductos.map((x) => "<tr>" + x.getInfo() + "</tr>").join(" ");
    console.log(elementos);
    display.innerHTML = `<table class="miTabla">
    <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precio</th>
    </tr>`+elementos;
    
    let total = 0
    const sumar = (num) => {
        total += num
    }
    misProductos.forEach((x) => {sumar(x.precio*x.cantidad)})
    suma.innerHTML = `Precio total es: ${total}`;
}
updateTable();
