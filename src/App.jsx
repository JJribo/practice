import { useState } from "react";
import "./index.css";
import Home from "./components/Home"
import Work from "./components/Work"
import Education from "./components/Education"
import Format from "./common/Format"
import About from "./components/About"
import {BrowserRouter , Routes, Route} from "react-router-dom"



function App() {
  return (
    <>
    <main className=" bg-slate-900 min-h-screen"> 
    <BrowserRouter>
      <Routes>
        <Route element = {<Format/>}>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Work" element = {<Work/>}/>
          <Route path = "Education" element = {<Education/>}/>
          <Route path="About" element = {<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
    </>
    
  );
}

export default App
