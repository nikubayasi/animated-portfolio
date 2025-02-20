import "./hero.scss";
import { motion } from "framer-motion";

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
        y:20,
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
                <motion.h2 variants={textVariants}>Web Developer</motion.h2> 
                <motion.h2>and</motion.h2>
                <motion.h2 variants={textVariants}>UI Designer</motion.h2>
                
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>
                    最新の作品を見る</motion.button>
                    <motion.button variants={textVariants}><a href="/contact">お問い合わせください</a></motion.button>
                 </motion.div>
                 <motion.img src="/scroll.webp" alt="" variants={textVariants} animate="scrollButton"/>
            </motion.div> 
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        ライター コンテンツクリエイター
        </motion.div>
      <div className="imageContainer">

        <motion.img src="/hero3.png" alt="hero image"   initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1 }} />
      </div>
    </div>
  )
}

export default Hero
