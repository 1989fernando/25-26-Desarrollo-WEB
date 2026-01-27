// Arreglo de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 850,
        descripcion: "Laptop para trabajo y estudio"
    },
    {
        nombre: "Mouse",
        precio: 15,
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: 25,
        descripcion: "Teclado mecánico"
    }
];

// Referencia al elemento <ul>
const listaProductos = document.getElementById("lista-productos");

// Función para renderizar los productos
function renderizarProductos() {
    listaProductos.innerHTML = ""; // Limpiar lista

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        listaProductos.appendChild(li);
    });
}

// Renderizar productos al cargar la página
renderizarProductos();

// Botón para agregar un nuevo producto
document.getElementById("btn-agregar").addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto nuevo",
        precio: 10,
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});
