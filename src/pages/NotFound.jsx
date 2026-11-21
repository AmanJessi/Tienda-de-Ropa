import { Link } from "react-router-dom"

function NotFound() {

    return (

        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">

            <h1 className="text-7xl font-bold text-pink-300">
                404
            </h1>

            <h2 className="text-2xl font-bold mt-4">
                Página no encontrada
            </h2>

            <p className="text-gray-500 mt-3">
                Lo sentimos, la página que buscas no existe.
            </p>

            <Link
                to="/"
                className="mt-6 bg-amber-200 px-8 py-3 rounded-full hover:bg-amber-300"
            >
                Volver al inicio
            </Link>

        </div>

    )
}

export default NotFound