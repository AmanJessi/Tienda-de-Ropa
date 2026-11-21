import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import ProductoDetalle from "./pages/ProductoDetalle"

import './App.css'

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<Home />} />

                    <Route path="catalogo" element={<Catalogo />} />

                    <Route path="contacto" element={<Contacto />} />

                    <Route path="*" element={<NotFound />} />

                   <Route path="/catalogo/:id" element={<ProductoDetalle />} />
                </Route>

            </Routes>

        </BrowserRouter>

    )
}

export default App