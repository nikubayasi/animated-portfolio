import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from 'react';
const items = [
  {
    id:1,
    title:"React Commerce",
    img:"https://images.unsplash.com/photo-1498049860654-af1a5c566876?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem deleniti corporis dignissimos quis repellat ad porro, explicabo, ipsum mollitia sed quam aut? Officia autem, aliquid libero quasi exercitationem ducimus at.",

  },
  {
    id:2,
    title:"Next.js Commerce",
    img:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem deleniti corporis dignissimos quis repellat ad porro, explicabo, ipsum mollitia sed quam aut? Officia autem, aliquid libero quasi exercitationem ducimus at.",
    
  },
  {
    id:3,
    title:"Vanilla Javascript App",
    img:"https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem deleniti corporis dignissimos quis repellat ad porro, explicabo, ipsum mollitia sed quam aut? Officia autem, aliquid libero quasi exercitationem ducimus at.",
    
  },
  {
    id:4,
    title:"Music App",
    img:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem deleniti corporis dignissimos quis repellat ad porro, explicabo, ipsum mollitia sed quam aut? Officia autem, aliquid libero quasi exercitationem ducimus at.",
    
  },
];

const Single = ({item}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({target:ref, 
    //offset:["start start","end start"]
   });
  const y = useTransform(scrollYProgress,[0,1],[-700,700]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
          <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({target:ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item)=>(
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
