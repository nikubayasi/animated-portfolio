import { useRef } from 'react';
import './services.scss'
import {motion , useInView} from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};
const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"});
  return (
    <motion.div className='services' variants={variants} initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref={ref}
    animate ={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
            私はお肉が大好物、お肉のために
            <br />働いていると言っても過言ではない！！
        </p><hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/city.jpg" alt="" />
            <h1><motion.b whileHover={{color:"cyan"}}>ユニークな</motion.b> アイデア</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:"cyan"}}>あなたの</motion.b> ビジネスのために</h1>
            <motion.button whileHover={{background:"lightgray",border:"1px solid #0f5572",color:"black",scale:0.9,transition:1,borderradius:"50px"}}>私たちがやっていること?</motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black",scale:1.03}}>
            <h2>Branding!</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quam officiis perspiciatis 
                ab dolor dolorem, praesentium sint possimus 
                modi hic voluptas labore vero nemo illum saepe 
                maiores tempora suscipit aspernatur quaerat.?
            </p>
            <motion.button whileHover={{background:"lightgray",border:"1px solid #0f5572",color:"black",scale:0.9,transition:1,borderradius:"50px"}}>Go</motion.button>
        </motion.div>
        <motion.div className="box"  whileHover={{background:"lightgray",color:"black",scale:1.03}}>
            <h2>Branding!</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quam officiis perspiciatis 
                ab dolor dolorem, praesentium sint possimus 
                modi hic voluptas labore vero nemo illum saepe 
                maiores tempora suscipit aspernatur quaerat.?
            </p>
            <motion.button whileHover={{background:"lightgray",border:"1px solid #0f5572",color:"black",scale:0.9,transition:1,borderradius:"50px"}}>Go</motion.button>
        </motion.div>
        <motion.div className="box"  whileHover={{background:"lightgray",color:"black",scale:1.1,transition:0.3}}>
            <h2>Branding!</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quam officiis perspiciatis 
                ab dolor dolorem, praesentium sint possimus 
                modi hic voluptas labore vero nemo illum saepe 
                maiores tempora suscipit aspernatur quaerat.?
            </p>
            <motion.button whileHover={{background:"lightgray",border:"1px solid #0f5572",color:"black",scale:0.9,transition:1,borderradius:"50px"}}>Go</motion.button>
        </motion.div>
        <motion.div className="box"  whileHover={{background:"lightgray",color:"black",scale:1.1}}>
            <h2>Branding!</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quam officiis perspiciatis 
                ab dolor dolorem, praesentium sint possimus 
                modi hic voluptas labore vero nemo illum saepe 
                maiores tempora suscipit aspernatur quaerat.?
            </p>
            <motion.button whileHover={{background:"lightgray",border:"1px solid #0f5572",color:"black",scale:0.9,transition:1,borderradius:"50px"}}>Go</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
