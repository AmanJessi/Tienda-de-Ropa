import useCart from "../store/useCart"

import { IoMdClose } from "react-icons/io"

import { Link } from "react-router-dom"

const Carts = () => {

    const carrito = useCart((state) => state.carrito)

    const abierto = useCart((state) => state.abierto)

    const cerrar = useCart((state) => state.cerrar)

    const aumentar = useCart((state) => state.aumentar)

    const disminuir = useCart((state) => state.disminuir)

    const vaciar = useCart((state) => state.vaciar)


    // Total de unidades
    const unidades = carrito.reduce(
        (suma, p) => suma + p.cantidad,
        0
    )


    // Total general
    const total = carrito.reduce(
        (suma, p) => suma + p.precio * p.cantidad,
        0
    )


    // Monto para envío gratis
    const montoEnvio = 7900

    const faltante = montoEnvio - total


    return (

        <>

            {/* Fondo oscuro */}

            {abierto && (

                <div
                    onClick={cerrar}
                    className="fixed inset-0 bg-black/40 z-40"
                />

            )}


            {/* Carrito */}

            <aside className={`fixed top-0 right-0 bg-white w-full sm:w-96 h-full p-6 z-50 transition-transform duration-500 overflow-y-auto
                ${abierto ? "translate-x-0" : "translate-x-full"}
            `}>

                {/* Encabezado */}

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        Mi carrito ({unidades})
                    </h2>

                    <button onClick={cerrar}>
                        <IoMdClose size={25} />
                    </button>

                </div>


                {/* Carrito vacío */}

                {carrito.length === 0 ? (

                    <div className="flex flex-col items-center justify-center mt-20 text-center">

                        <p className="text-xl text-gray-500 mb-5">
                            Tu carrito está vacío
                        </p>

                        <Link
                            to="/catalogo"
                            onClick={cerrar}
                            className="bg-pink-200 text-white px-6 py-3 rounded-full"
                        >
                            Ir al catálogo
                        </Link>

                    </div>

                ) : (

                    <>

                        {/* Productos */}

                        <div className="space-y-5">

                            {carrito.map((producto) => (

                                <div
                                    key={producto.id}
                                    className="flex gap-3 border-b pb-5"
                                >

                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        className="w-20 h-20 object-contain"
                                    />


                                    <div className="flex-1">

                                        <h3 className="font-bold">
                                            {producto.nombre}
                                        </h3>

                                        <p>
                                            Bs {producto.precio}
                                        </p>


                                        {/* Cantidades */}

                                        <div className="flex items-center gap-3 mt-3">

                                            <button
                                                onClick={() => disminuir(producto.id)}
                                                className="border px-3 rounded"
                                            >
                                                -
                                            </button>

                                            <span>
                                                {producto.cantidad}
                                            </span>

                                            <button
                                                onClick={() => aumentar(producto.id)}
                                                disabled={producto.cantidad >= 5}
                                                className="border px-3 rounded disabled:bg-gray-300"
                                            >
                                                +
                                            </button>

                                        </div>


                                        {producto.cantidad === 5 && (

                                            <p className="text-sm text-red-600 mt-1">
                                                Máximo 5
                                            </p>

                                        )}

                                        <p className="mt-2 font-semibold">
                                            Subtotal: Bs {producto.precio * producto.cantidad}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Resumen */}

                        <div className="mt-8 border-t pt-5">

                            <h3 className="text-xl font-bold">
                                Total: Bs {total}
                            </h3>


                            {/* Envío */}

                            {total >= montoEnvio ? (

                                <p className="text-green-600 font-bold mt-3">
                                    ¡Envío gratis!
                                </p>

                            ) : (

                                <p className="text-gray-600 mt-3">
                                    Te faltan Bs {faltante} para el envío gratis
                                </p>

                            )}


                            {/* Vaciar carrito */}

                            <button
                                onClick={vaciar}
                                className="w-full bg-red-600 text-white py-3 rounded-full mt-6 hover:bg-red-700"
                            >
                                Vaciar carrito
                            </button>

                        </div>

                    </>

                )}

            </aside>

        </>

    )

}

export default Carts