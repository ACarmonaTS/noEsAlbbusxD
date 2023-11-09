import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeViewFactory } from "../modules/home/sections/HomeViewFactory";
import { AvisoPrivacidad } from "../modules/home/pages/AvisoPrivacidad";
import { PoliticaCookies } from "../modules/home/pages/PoliticaCookies";
import { TerminosCondiciones } from "../modules/home/pages/TerminosCondiciones";
import ContactViewFactory from "../modules/contact/ContactViewFactory";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";
import { NavOpt, Linked } from "../components/Navbar/NavOpt";

export const AppRouter = () => {

    const [links, setLinks] = useState<Linked[]>(NavOpt);

    useEffect(() => {
      setLinks((links) =>
        links.map((data, index) => {
          if (index === 0) {
            return { ...data, active: true };
          } else {
            return { ...data, active: false };
          }
        })
      );
    }, []);
  
    function handleClick(name: string) {
      setLinks((links) =>
        links.map((data) => {
          if (data.name === name) {
            return { ...data, active: true };
          } else {
            return { ...data, active: false };
          }
        })
      );
    }

    return (
        <Router>
            <Navbar links={links} handleClick={handleClick} />
            <Routes>
                <Route path="/" element={<HomeViewFactory handleClick={handleClick}/>} />
                <Route path="/contacto" element={<ContactViewFactory handleClick={handleClick}/>} />
                <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
                <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
                <Route path="/politicas-cookies" element={<PoliticaCookies />} />
            </Routes>
        </Router>
    )
}
