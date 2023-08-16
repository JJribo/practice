import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
function Format(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>

        </>
    )
}
export default Format

