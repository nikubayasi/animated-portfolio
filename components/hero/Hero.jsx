import "./hero.scss";
import { motion } from "framer-motion";
import App from './../../src/App';
const textVariants = {
    initial:{
        x:-500,
        opacity: 0,

    },
    animate:{
        x:0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:25,
        transition:{
            duration:2,
            repeat:Infinity,
        },
    },
}
const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:50,
            staggerChildren:0.1,
        },
    },
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Nikku Portfolio</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and UI Designer</motion.h1>
                
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>
                    最新の作品を見る</motion.button>
                    <motion.button variants={textVariants}><a href="/contact">連絡してください</a></motion.button>
                 </motion.div>
                 <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
            </motion.div> 
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        ライター コンテンツクリエイター
        </motion.div>
      <div className="imageContainer">
        <motion.h3>お肉美味しいよ！</motion.h3>
        <motion.img src="/hero3.png" alt="hero image" />
      </div>
    </div>
  )
}

export default Hero
