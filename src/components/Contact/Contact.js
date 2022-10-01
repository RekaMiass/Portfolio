import React from "react";
import {useState} from 'react';
import './Contact.css';
import { motion } from "framer-motion/dist/framer-motion";


const Contact = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 300);
    };

    while (submitted) {
        return (
            <div className="submitted">Thank You!</div>
        );
    }

    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {duration: 0.6}}} 
        exit={{opacity: 0, transition: {duration: 0.3}}} 
        onSubmit={handleSubmit} className='contact'>
            <p className="form-name">Feel free to contact me!</p>
            <form className="forms">    
                    <input className="name-input" type='name' placeholder="Name" required/>
                    <input className="email-input" type='email' placeholder="E-mail" required/>
                    <textarea className="message-input" placeholder="Your message..." required/>
                    <button className="submit" type='submit'>SEND</button>
            </form>
        </motion.div>
    )
}

export default Contact;