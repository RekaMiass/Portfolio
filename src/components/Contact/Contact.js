import React from "react";
import {useState} from 'react';
import './Contact.css';
import { send } from 'emailjs-com';
import { motion } from "framer-motion/dist/framer-motion";


const Contact = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        from_mail: '',
        message: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 300);
    };
    if (submitted) {
        return (
            <div className="submitted">Your message has been successfully sent. Thank You!</div>
        );
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
        'service_bgkdtud',
        'template_xo7b9gc',
        toSend,
        'zqZtX-7FFiGO3xNd8'
        )
    };
    
    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {duration: 0.6}}} 
        exit={{opacity: 0, transition: {duration: 0.3}}} 
        onSubmit={handleSubmit} className='contact'>
            <p className="form-name">Feel free to contact me!</p>
            <form className="forms" onSubmit={onSubmit}>    
                    <input className="name-input" 
                        name='from_name' 
                        value={toSend.from_name} 
                        type='name' 
                        placeholder="Name" 
                        onChange={handleChange} 
                        required/>
                    <input className="email-input" 
                        name='from_mail' 
                        value={toSend.from_mail} 
                        type='email' 
                        placeholder="E-mail" 
                        onChange={handleChange} 
                        required/>
                    <textarea className="message-input" 
                        name='message' 
                        value={toSend.message} 
                        placeholder="Your message..." 
                        onChange={handleChange} 
                        required/>
                    <button className="submit" type='submit'>SEND</button>
            </form>
        </motion.div>
    )
}

export default Contact;
