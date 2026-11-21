import { productos } from "../../data/productos"
import ProductCard from "../../components/ProductCard"

const Products = () => {

    // Mostrar solamente los primeros 4 productos
    const productosInicio = productos.slice(0, 4)

    return (

        <section className="px-6 md:px-8 py-10">

            <h2 className="text-2xl font-bold mb-8 text-pink-200">
                Productos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {productosInicio.map((producto) => (

                    <ProductCard
                        key={producto.id}
                        producto={producto}
                    />

                ))}

            </div>

        </section>

    )

}

export default Products