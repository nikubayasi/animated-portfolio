import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper ">
            <motion.span initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >Niku Dive</motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="/instagram.png" alt="instagram" /></a>
                <a href="https://www.youtube.com/@4zuraDah4k-l1k" target="_blank"><img src="/youtube.png" alt="youtube" /></a>
                <a href="https://dribbble.com/2Qbayasi" target="_blank"><img src="/dribbble.png" alt="dribbble" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
