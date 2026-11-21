import { Link, useParams } from "react-router-dom"
import { productos } from "../data/productos"
import ProductCard from "../components/ProductCard"
import useCart from "../store/useCart"

function ProductoDetalle() {
  const { id } = useParams()

  const producto = productos.find(
    (p) => p.id === Number(id)
  )

  const agregar = useCart((state) => state.agregar)
  const carrito = useCart((state) => state.carrito)

  // Verificar si el ID es un número entero válido
  const idValido = /^\d+$/.test(id)

  if (!idValido || !producto) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Producto no encontrado
        </h2>

        <Link
          to="/catalogo"
          className="text-pink-300 underline"
        >
          Volver al catálogo
        </Link>
      </div>
    )
  }

  const productoEnCarrito = carrito.find(
    (p) => p.id === producto.id
  )

  const cantidad = productoEnCarrito
    ? productoEnCarrito.cantidad
    : 0

  const relacionados = productos
    .filter(
      (p) =>
        p.categoria === producto.categoria &&
        p.id !== producto.id
    )
    .slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full max-w-md mx-auto rounded-xl"
        />

        <div>
          <p className="text-gray-500">
            {producto.categoria}
          </p>

          <h1 className="text-4xl font-bold my-3">
            {producto.nombre}
          </h1>

          <p className="text-2xl font-semibold mb-6">
            Bs {producto.precio}
          </p>

          <button
            onClick={() => agregar(producto)}
            disabled={cantidad >= 5}
            className="bg-black text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
          >
            {cantidad >= 5
              ? "Máximo 5"
              : "Agregar al carrito"}
          </button>

          <div className="mt-6">
            <Link
              to="/catalogo"
              className="text-pink-300 underline"
            >
              Volver al catálogo
            </Link>
          </div>
        </div>

      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          También te puede interesar
        </h2>

        {relacionados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relacionados.map((p) => (
              <ProductCard
                key={p.id}
                producto={p}
              />
            ))}
          </div>
        ) : (
          <p>¡Es el único de su categoría!</p>
        )}
      </section>

    </div>
  )
}

export default ProductoDetalle