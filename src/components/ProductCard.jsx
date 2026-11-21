import useCart from "../store/useCart"
import { Link } from "react-router-dom"

function ProductCard({ producto }) {

    const agregar = useCart((state) => state.agregar)

    const carrito = useCart((state) => state.carrito)

    const productoEnCarrito = carrito.find(
        (p) => p.id === producto.id
    )

    const limiteAlcanzado =
        productoEnCarrito?.cantidad >= 5

    return (

        <article className="border border-gray-300 rounded-2xl p-4 shadow-sm">

            <div className="relative">

                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-52 object-contain"
                />

                <span className="absolute top-2 left-2 bg-gray-100 border rounded-full px-3 py-1 text-sm">
                    {producto.categoria}
                </span>

            </div>


            <div className="mt-4">

                <h2 className="text-2xl font-bold">
                    {producto.nombre}
                </h2>

                <p className="text-xl mt-2">
                    Bs {producto.precio}
                </p>

                <button
                    onClick={() => agregar(producto)}
                    disabled={limiteAlcanzado}
                    className={`w-full rounded-full py-2 mt-4 text-white
                        ${limiteAlcanzado
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-pink-200 hover:bg-pink-200"
                        }`}
                >
                    {limiteAlcanzado
                        ? "Máximo 5"
                        : "Agregar al carrito"
                    }
                </button>

<Link
  to={`/catalogo/${producto.id}`}
  className="block text-center mt-3 text-pink-300 underline"
>
  Ver detalle
</Link>
            </div>

        </article>

    )

}

export default ProductCard