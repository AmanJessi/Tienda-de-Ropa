import { create } from "zustand"

const useCart = create((set) => ({

    // Estados
    carrito: [],
    abierto: false,

    // Abrir carrito
    abrir: () => set({ abierto: true }),

    // Cerrar carrito
    cerrar: () => set({ abierto: false }),

    // Agregar producto
    agregar: (producto) => set((state) => {

        const existe = state.carrito.find(
            (p) => p.id === producto.id
        )

        if (existe) {

            if (existe.cantidad >= 5) {
                return { abierto: true }
            }

            return {
                carrito: state.carrito.map((p) =>
                    p.id === producto.id
                        ? { ...p, cantidad: p.cantidad + 1 }
                        : p
                ),
                abierto: true
            }

        }

        return {
            carrito: [
                ...state.carrito,
                { ...producto, cantidad: 1 }
            ],
            abierto: true
        }

    }),

    // Aumentar cantidad
    aumentar: (id) => set((state) => ({

        carrito: state.carrito.map((p) =>
            p.id === id && p.cantidad < 5
                ? { ...p, cantidad: p.cantidad + 1 }
                : p
        )

    })),

    // Disminuir cantidad
    disminuir: (id) => set((state) => ({

        carrito: state.carrito
            .map((p) =>
                p.id === id
                    ? { ...p, cantidad: p.cantidad - 1 }
                    : p
            )
            .filter((p) => p.cantidad > 0)

    })),

    // Vaciar carrito
    vaciar: () => set({ carrito: [] })

}))

export default useCart