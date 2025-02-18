import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
const variants = {
    initial:{
        y: 500,
        opacity:0,
    },
    animate: {
        y :0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren: 0.1,
        }
    }
}
const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error,setError] = useState(false);
    const [success, setSucsess] = useState(false);
    const isInView = useInView(ref, {margin:"-100px"});
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6qq83ls', 'template_vviikz4', formRef.current, {
            publicKey: 'ODD8oar3mr428IP01',
          })
          .then(
            (result) => {
              setSucsess(true)
            },
            (error) => {
                setError(true)
            },
          );
      };

    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView={"animate"}>
        <motion.div className="textContaier" variants={variants}>
            <motion.h1 variants={variants}>Let's Work <br /> Together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>sagas@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Hamura City Tokyo</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>080-0000-9999</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" 
            initial={{opacity:1}} 
            whileInView={{opacity:0}} 
            transition={{delay: 2.5,duration: 1}}>
                <svg width="450px" height="450px" viewBox="0 0 32.66 32.66" fill="none">
                    <motion.path 
                    strokeWidth={0.2}
                    initial={{pathLength:0}}
                    animate={isInView && {pathLength:1}}
                    transition={{duration:3}}
                    d="M19.744 11.495c-0.23-0.252-0.559-0.41-0.926-0.41-0.691 0-1.25 0.56-1.25 1.25 0 0.323 0.122 0.617 0.323 0.838l-0.001-0.001c0.737 0.832 1.186 1.933 1.186 3.14 0 1.463-0.662 2.771-1.702 3.642l-0.007 0.006c-0.225 0.226-0.364 0.538-0.364 0.882 0 0.691 0.56 1.251 1.251 1.251 0.344 0 0.655-0.139 0.881-0.363l-0 0c1.51-1.327 2.457-3.262 2.457-5.418 0-1.855-0.701-3.547-1.854-4.823l0.006 0.006zM22.799 8.44c-0.23-0.253-0.56-0.411-0.926-0.411-0.69 0-1.25 0.56-1.25 1.25 0 0.321 0.121 0.614 0.32 0.835l-0.001-0.001c1.359 1.544 2.188 3.582 2.188 5.814 0 2.679-1.195 5.079-3.080 6.697l-0.012 0.010c-0.225 0.226-0.364 0.538-0.364 0.882 0 0.691 0.56 1.251 1.251 1.251 0.344 0 0.656-0.139 0.882-0.364l-0 0c2.335-2.092 3.798-5.117 3.798-8.484 0-2.87-1.063-5.492-2.817-7.493l0.011 0.013zM25.639 5.182c-0.229-0.242-0.552-0.393-0.911-0.393-0.691 0-1.251 0.56-1.251 1.251 0 0.329 0.127 0.629 0.336 0.853l-0.001-0.001c2.124 2.273 3.428 5.336 3.428 8.704 0 3.846-1.701 7.294-4.392 9.634l-0.016 0.013c-0.225 0.226-0.364 0.538-0.364 0.882 0 0.691 0.56 1.251 1.251 1.251 0.344 0 0.656-0.139 0.882-0.364l-0 0c10.973-10.976 1.135-21.723 1.035-21.83zM13.39 20.291c-0.23-0.314-0.597-0.516-1.011-0.516-0 0-0 0-0 0h0c-0.687 0.001-1.345 0.127-1.952 0.356l0.038-0.013c-0.461-1.225-0.728-2.641-0.728-4.119s0.267-2.894 0.755-4.202l-0.027 0.083c0.569 0.216 1.227 0.342 1.914 0.343h0c0 0 0 0 0 0 0.414 0 0.782-0.202 1.009-0.512l0.002-0.004 4.282-5.897c0.149-0.203 0.238-0.458 0.238-0.734 0-0.108-0.014-0.212-0.039-0.312l0.002 0.009c-0.154-0.586-0.4-1.1-0.726-1.552l0.009 0.014c-0.199-0.306-0.418-0.572-0.663-0.812l-0.001-0.001-0.006-0.007c-1.043-1.029-2.475-1.664-4.057-1.664-1.585 0-3.020 0.638-4.064 1.671l0-0c-3.469 3.477-5.614 8.275-5.614 13.575s2.145 10.099 5.614 13.576l-0-0c1.032 1.033 2.459 1.672 4.035 1.672 0.006 0 0.013 0 0.019-0h-0.001c0.003 0 0.007 0 0.010 0 1.582 0 3.016-0.636 4.059-1.667l-0.001 0.001c0.232-0.221 0.437-0.467 0.613-0.734l0.010-0.016c0.337-0.456 0.599-0.991 0.755-1.57l0.008-0.034c0.024-0.091 0.037-0.195 0.037-0.303 0-0.276-0.089-0.531-0.241-0.738l0.002 0.003zM15.032 27.445c-0.091 0.134-0.19 0.25-0.301 0.355l-0.001 0.001c-0.59 0.587-1.403 0.949-2.301 0.949-0.895 0-1.706-0.36-2.296-0.944l0 0c-3.017-3.024-4.883-7.198-4.883-11.808s1.866-8.784 4.883-11.808l-0 0c0.583-0.581 1.387-0.94 2.275-0.94 0.004 0 0.008 0 0.012 0h-0.001c0.001 0 0.002 0 0.003 0 0.898 0 1.712 0.36 2.305 0.944l-0-0c0.13 0.127 0.246 0.268 0.346 0.42l0.006 0.009c0.055 0.076 0.111 0.164 0.162 0.255l0.008 0.015-3.465 4.771c-0.467-0.099-0.879-0.285-1.236-0.542l0.010 0.007c-0.2-0.142-0.449-0.226-0.718-0.226-0.491 0-0.916 0.283-1.121 0.696l-0.003 0.007c-0.935 1.866-1.482 4.066-1.482 6.393s0.547 4.527 1.52 6.477l-0.038-0.084c0.208 0.419 0.634 0.703 1.125 0.703 0.267 0 0.515-0.084 0.719-0.227l-0.004 0.003c0.349-0.25 0.761-0.436 1.207-0.531l0.021-0.004 3.463 4.77c-0.074 0.133-0.145 0.244-0.222 0.351l0.007-0.011z"></motion.path>
                </svg>
            </motion.div>
            <motion.form ref={formRef} initial={{opacity:0}}
            onSubmit={sendEmail}
            whileInView={{opacity:1}} 
            transition={{delay: 3.5}}>
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </div>
        </motion.div>
    )
}

export default Contact
