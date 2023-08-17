import { useState } from "react";
import "./index.css";
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Format from "./common/Format"
import About from "./components/About"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Contact from "./components/Contact"



function App() {
  return (
    <>
    <main className=" bg-slate-900 min-h-screen"> 
    <BrowserRouter>
      <Routes>
        <Route element = {<Format/>}>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Portfolio" element = {<Portfolio/>}/>
          <Route path = "Contact" element = {<Contact/>}/>
          <Route path="About" element = {<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    </>
    
  );
}

export default App
