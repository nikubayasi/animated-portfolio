import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useEffect,useState } from "react";

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
      const [isPathVisible, setIsPathVisible] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsPathVisible(true);
        }
    }, [isInView]);

    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView={"animate"}>
        <motion.div className="textContaier" variants={variants}>
            <motion.h1 variants={variants}>
            一緒に <br /> 働きましょう</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>メール</h2>
                <span>sagas@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>住所</h2>
                <span>Hamura City Tokyo</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>電話番号</h2>
                <span>080-0000-9999</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" 
            initial={{opacity:1}} 
            whileInView={{opacity:0}} 
            transition={{delay: 2.5,duration: 1}}>
                 <svg width="800px" height="800px" viewBox="0 0 32.66 32.66" fill="none">
                    <motion.path 
                    strokeWidth={0.2}
                    initial={{pathLength:0}}
                    animate={isPathVisible ? { pathLength: 1 } : { pathLength: 0 }} 
                    transition={{duration:2}}
                    d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z">
                    </motion.path>
                </svg>
            </motion.div>
            <motion.form ref={formRef} initial={{opacity:0}}
            onSubmit={sendEmail}
            whileInView={{opacity:1}} 
            transition={{delay: 3}}>
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
