import React from "react";
import './Skills.css';

const Skills = ({active, setActive}) => {

    return (
        <div className={active ? 'skills-back active' : 'skills-back'}>   
            <div className={active ? 'skills-content active' : 'skills-content'} onClick={e => e.stopPropagation}>
                <ul>
                    <button className="close-skills" onClick={() => setActive(false)}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Git</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <br/>
                    <b>Languges:</b>
                    <li>Russian (native)</li>
                    <li>English (B2)</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;