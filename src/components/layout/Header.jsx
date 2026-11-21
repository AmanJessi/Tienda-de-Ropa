import { CiUser } from "react-icons/ci"

import { IoMdCart } from "react-icons/io"

import { Link, NavLink } from "react-router-dom"

import useCart from "../../store/useCart"

const Header = () => {

    const abrir = useCart((state) => state.abrir)

    const carrito = useCart((state) => state.carrito)


    const unidades = carrito.reduce(
        (suma, p) => suma + p.cantidad,
        0
    )


    return (

        <header>

            {/* Franja superior */}

            <div className="bg-pink-200 text-white px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2">

                <span>
                    Programación Web III (INF-133)
                </span>

                <span>
                    Nombre: Amanda Jessica Rodriguez  CI: 14039779
                </span>

            </div>


            {/* Menú principal */}

            <nav className="bg-amber-100 px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-5">

                <Link to="/" className="text-2xl font-bold">
                    MI TIENDA
                </Link>


                <ul className="flex gap-6">

                    <li>
                        <NavLink to="/" end>
                            Inicio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/catalogo">
                            Catálogo
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacto">
                            Contacto
                        </NavLink>
                    </li>

                </ul>


                {/* Iconos */}

                <div className="flex items-center gap-5">

                    <CiUser size={25} />


                    <button
                        onClick={abrir}
                        className="relative"
                    >

                        <IoMdCart size={28} />

                        {unidades > 0 && (

                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

                                {unidades}

                            </span>

                        )}

                    </button>

                </div>

            </nav>

        </header>

    )

}

export default Header