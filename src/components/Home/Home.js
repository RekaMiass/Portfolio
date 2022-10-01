import React from "react";
import './Home.css';
import { motion } from "framer-motion/dist/framer-motion";

const Home = () => {
    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {duration: 0.6}}} 
        exit={{opacity: 0, transition: {duration: 0.3}}}>
            <div className='content'>
                <img className="tiny" src="/pictures/tiny.jpg" alt=""/>
                <div className="description">
                    <p className='name'>Maria Avramenko</p>
                    <p className='cover-text'>I'm frontend developer and I'm going to solve your tasks. Welcome!</p>
                    <a href="/МоёРезюме.pdf" download><button className="cv-button">DOWNLOAD CV</button></a>
                </div>
            </div>
            <div className="links">
                <a href="https://github.com/RekaMiass">
                    <button className="link-buttons" title="Go to GitHub"> 
                        <img className="button-icon" src="/icons/github.png" alt=""/>
                    </button>
                </a>
                <a href="mailto:mariavram@mail.ru">
                    <button className="link-buttons" title="Send a mail"> 
                        <img className="button-icon" src="/icons/email.png" alt=""/>
                    </button>
                </a>
                <a href="https://t.me/mariavramm">
                    <button className="link-buttons"  title="Text in Telegram"> 
                        <img className="button-icon" src="/icons/telegram.png" alt=""/>
                    </button>
                </a>   
                <a href="http://instagram.com/mariavramm">
                    <button className="link-buttons" title="Go to Instagram"> 
                        <img className="button-icon" src="/icons/instagram.png" alt=""/>
                    </button>
                </a>
            </div>
        </motion.div>
    )
}

export default Home;