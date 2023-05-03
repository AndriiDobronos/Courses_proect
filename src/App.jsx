import React from 'react'
import './app.styles.scss'
import Portfolios from "./pages/Portfolios.jsx";
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import Resume from "./pages/Resume.jsx";
import Header from "./components/Header.jsx";

export default class App extends React.Component{

    render() {
            return <div className={"main"} >
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/resume" element={<Resume />}/>
                <Route path="/portfolios" element={<Portfolios />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
            </div>
    }
}