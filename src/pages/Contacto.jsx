import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

function Contacto() {

    const contactos = [
        {
            id: 1,
            titulo: "Teléfono",
            dato: "+591 700 00000",
            icono: <FaPhone size={30} />
        },
        {
            id: 2,
            titulo: "Correo",
            dato: "tienda@gmail.com",
            icono: <FaEnvelope size={30} />
        },
        {
            id: 3,
            titulo: "Dirección",
            dato: "Av. Ejemplo 123",
            icono: <FaMapMarkerAlt size={30} />
        }
    ]

    return (

        <section className="px-6 py-12">

            <h1 className="text-3xl font-bold text-pink-300 mb-8">
                Contáctanos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {contactos.map((contacto) => (

                    <div
                        key={contacto.id}
                        className="border rounded-xl p-8 flex flex-col items-center gap-4 shadow-md"
                    >

                        <div className="text-pink-300">
                            {contacto.icono}
                        </div>

                        <h2 className="font-bold text-xl">
                            {contacto.titulo}
                        </h2>

                        <p className="text-gray-600">
                            {contacto.dato}
                        </p>

                    </div>

                ))}

            </div>

        </section>

    )
}

export default Contacto