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
                <img className="group-pic" src="/pictures/Todo.png" alt=""/>
                <div className="group2-description">
                    <p className="group-name">TODO LIST</p>
                    <div className="tools2">
                        <p className="react-tool">React</p>
                        <p className="ts-tool">TypeScript</p>
                        <p className="css-tool">CSS</p>
                    </div>
                    <p>Classic Todo list.</p>
                    <div className="buttons">
                        <a href="https://github.com/RekaMiass/Test-TodoList">
                            <button className="catGithub-button" title="See the code"><img className="button-icon" src="/icons/github.png" alt=""/></button>
                        </a>
                        <a href="https://whimsical-caramel-638f76.netlify.app">
                            <button className="todo-button" title="Look the project">TODO LIST</button>
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
                    <p>Info Board includes the current news, the weather forecast, and the exchange rates for the euro and the American dollar to the Russian ruble. 
                    It also shows the current date and time. Here I focused on fetching data from API and using React Hooks.</p>
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
            <div className="group">
                <img className="group-pic" src="/pictures/CatsFacts.png" alt=""/>
                <div className="group2-description">
                    <p className="group-name">CAT FACTS</p>
                    <div className="tools2">
                        <p className="js-tool">JavaScript</p>
                        <p className="css-tool">CSS</p>
                        <p className="html-tool">HTML</p>
                    </div>
                    <p>To know something new about our fluffy mates you need to click a button and you'll get a random fact. 
                    Here I fetched data from API. I chose an API that is free and open without any unique key.</p>
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
                    <p className="group-name">MAGIC BALL</p>
                    <div className="tools1">
                        <p className="react-tool">React</p>
                        <p className="css-tool">CSS</p>
                    </div>
                    <p>The first project I developed with React. It's inspired by a toy that gives random answers. Those answers were different types of YES and NO. 
                    In my toy version, you need to fill out a form and click a button to get the answer.</p>
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
           
        </motion.div>
    )
}

export default Projects;
