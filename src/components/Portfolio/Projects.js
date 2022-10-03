import React from "react";
import './Projects.css';
import { motion } from "framer-motion/dist/framer-motion";

const Projects = () => {
    return (
        <motion.div   
        initial={{opacity: 0}}           
        animate={{opacity: 1, transition: {duration: 0.6}}} 
        exit={{opacity: 0, transition: {duration: 0.3}}}
        className='portfolio'>
            <div className="group">
                <div className="group1-description">
                    <p className="group-name">MAGIC BALL</p>
                    <div className="tools1">
                        <p className="react-tool">React</p>
                        <p className="css-tool">CSS</p>
                    </div>
                    <p>The first project I've done and the first project I've done with React. 
                    It's inspired of a once popular toy that had ball shape. 
                    People asked things they were doubted about, shook the ball and it gave them random answer. 
                    Actually those answers were different types of YES and NO.
                    In my version of the ball you need to fill out a form and click a button to get the answer.</p>
                    <div className="buttons">
                        <a href="https://charming-sunshine-7a933d.netlify.app">
                            <button className="magicball-button" title="Look the project">MAGIC BALL</button>
                        </a>
                        <a href="https://github.com/RekaMiass/MagicBall-project">
                            <button className="github-button" title="See the code"><img className="button-icon" src="/icons/github.png" alt=""/></button>
                        </a>
                    </div>
                </div>
                <img className="group-pic" src="/pictures/MagicBall.png" alt=""/>
            </div>
            <div className="group">
                <img className="group-pic" src="/pictures/CatsFacts.png" alt=""/>
                <div className="group2-description">
                    <p className="group-name">CAT FACTS</p>
                    <div className="tools2">
                        <p className="js-tool">JavaScript</p>
                        <p className="css-tool">CSS</p>
                        <p className="html-tool">HTML</p>
                    </div>
                    <p>Here I fetched data from API. I chose API that is free and open without any unique key. 
                    To know something new about our fluffy mates you need to click a button and you'll get random fact.</p>
                    <div className="buttons">
                        <a href="https://github.com/RekaMiass/CatsFacts">
                            <button className="catGithub-button" title="See the code"><img className="button-icon" src="/icons/github.png" alt=""/></button>
                        </a>
                        <a href="https://flourishing-meerkat-83b8c4.netlify.app">
                            <button className="catfacts-button" title="Look the project">CAT FACTS</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="group">
                <div className="group1-description">
                    <p className="group-name">INFO BOARD</p>
                    <div className="tools1">
                        <p className="react-tool">React</p>
                        <p className="css-tool">CSS</p>
                    </div>
                    <p>Info Board includes current news, weather forecast, exchange rates for euro and American dollar to Russian ruble.
                    It also shows current date and time. Here I focused on getting data from API and using React Hooks.</p>
                    <div className="buttons">
                        <a href="https://rococo-smakager-6edfd3.netlify.app">
                            <button className="infoboard-button" title="Look the project">INFO BOARD</button>
                        </a>
                        <a href="https://github.com/RekaMiass/InfoBoard">
                            <button className="github-button" title="See the code"><img className="button-icon" src="/icons/github.png" alt=""/></button>
                        </a>
                    </div>
                </div>
                <img className="group-pic" src="/pictures/InfoBoard.png" alt=""/>
            </div>
        </motion.div>
    )
}

export default Projects;
