import Header from "./Header"

import Footer from "./Footer"

import Carts from "../Carts"

import { Outlet } from "react-router-dom"


function MainLayout() {

    return (

        <div>

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

            <Carts />

        </div>

    )

}

export default MainLayout