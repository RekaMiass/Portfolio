import React from "react";
import {useState} from 'react';
import './About.css';
import Skills from "./Skills/Skills";
import { motion } from "framer-motion/dist/framer-motion";

const About = () => {

    const [modalActive, setModalActive] = useState(false);

    return (
        <motion.div
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {duration: 0.6}}} 
        exit={{opacity: 0, transition: {duration: 0.3}}}
        className="about">
            <img className="about-pic" src="/pictures/about_pic.jpg" alt=""/>
            <div className="about-title">
                <div className="title">
                    <p className="title-head">Maria Avramenko</p>
                    <li className="title-text">27 y.o.</li>
                    <li className="title-text">+79823150580</li>
                    <li className="title-text">mariavram@mail.ru</li>
                </div>
                <div className="about-text">
                    <p className="text">Hello! I am frontend developer based in Ekaterinburg, Russia. 
                    I like to travel, listen to 80s music (that's my love), read scientific publications and write code. 
                    I like to find solutions to difficult tasks. It gives me energy for reaching new goals.</p>
                    <button className="skills-button" onClick={() => setModalActive(true)}>SKILLS</button>
                </div> 
            </div>   
            <Skills active={modalActive} setActive={setModalActive}></Skills>    
        </motion.div>
    )
}


export default About;
