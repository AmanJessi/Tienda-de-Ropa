import { useState } from "react"

import { productos } from "../data/productos"

import ProductCard from "../components/ProductCard"


function Catalogo() {

    // Estado de categoría
    const [categoria, setCategoria] = useState("Todas")

    // Estado de productos económicos
    const [economicos, setEconomicos] = useState(false)

    // Estado del ordenamiento
    const [orden, setOrden] = useState(0)


    // Obtener las categorías automáticamente
    const categorias = [
        "Todas",
        ...new Set(productos.map((producto) => producto.categoria))
    ]


    // Aplicar filtros
    let productosFiltrados = productos.filter((producto) => {

        const coincideCategoria =
            categoria === "Todas" ||
            producto.categoria === categoria

        const coincidePrecio =
            !economicos || producto.precio < 500

        return coincideCategoria && coincidePrecio

    })


    // Ordenar productos
    if (orden === 1) {

        productosFiltrados.sort((a, b) => a.precio - b.precio)

    } else if (orden === 2) {

        productosFiltrados.sort((a, b) => b.precio - a.precio)

    }


    // Cambiar orden
    const cambiarOrden = () => {

        setOrden((orden + 1) % 3)

    }


    return (

        <section className="px-6 md:px-8 py-10">

            <h1 className="text-3xl font-bold text-pink-300 mb-6">
                Catálogo
            </h1>


            {/* FILTROS DE CATEGORÍA */}

            <div className="flex flex-wrap gap-3 mb-6">

                {categorias.map((cat) => (

                    <button
                        key={cat}
                        onClick={() => setCategoria(cat)}
                        className={`px-5 py-2 rounded-full border transition
                            ${categoria === cat
                                ? "bg-pink-300 text-white"
                                : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        {cat}
                    </button>

                ))}

            </div>


            {/* FILTRO DE PRECIO Y ORDENAMIENTO */}

            <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        checked={economicos}
                        onChange={() => setEconomicos(!economicos)}
                        className="w-5 h-5"
                    />

                    Solo económicos (menos de Bs 500)

                </label>


                <button
                    onClick={cambiarOrden}
                    className="border border-gray-400 rounded-full px-5 py-2 hover:bg-gray-100"
                >

                    Ordenar: {
                        orden === 0
                            ? "Original"
                            : orden === 1
                                ? "Menor precio"
                                : "Mayor precio"
                    }

                </button>

            </div>


            {/* CONTADOR */}

            <p className="text-gray-500 mb-5">

                Mostrando {productosFiltrados.length} de {productos.length} productos

            </p>


            {/* PRODUCTOS */}

            {productosFiltrados.length > 0 ? (

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {productosFiltrados.map((producto) => (

                        <ProductCard
                            key={producto.id}
                            producto={producto}
                        />

                    ))}

                </div>

            ) : (

                <div className="bg-gray-100 rounded-2xl p-10 text-center">

                    <h2 className="text-xl font-bold text-pink-300">
                        Cuando los filtros no dejan ningún producto
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Uy, no encontramos productos con esos filtros.
                        Prueba quitando alguno.
                    </p>

                </div>

            )}

        </section>

    )

}

export default Catalogo