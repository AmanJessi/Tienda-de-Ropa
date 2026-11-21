import Brands from "../sections/home/Brands"
import Hero from "../sections/home/Hero"
import Products from "../sections/home/Products"

function Home() {

    return (
        <div>

            <Brands />

            <Hero />

            <div className="text-center py-10 px-4">

                <h1 className="text-3xl md:text-4xl font-bold text-pink-300">
                    Tienda de ropa y accesorios
                </h1>

                <p className="mt-3 text-gray-600">
                    Descubre nuestros productos y encuentra tu estilo.
                </p>

            </div>

            <Products />

        </div>
    )
}

export default Home