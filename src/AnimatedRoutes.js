import React from 'react';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Portfolio/Projects";
import Contact from "./components/Contact/Contact";
import {Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';


const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}>
                </Route>
                <Route path='/about' element={<About />}>
                </Route>
                <Route path='/projects' element={<Projects />}>
                </Route>
                <Route path='/contact' element={<Contact />}>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;
