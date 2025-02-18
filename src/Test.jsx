import {motion} from "framer-motion";
import { useState } from "react";
const Test = () => {
    const [open,setOpen] = useState(false);
    const variants = {
        // visible:{opacity:1, x:100,transition:{type:"spring", stiffness:1000,}},
        visible: (i) => ({
            opacity:1,
            x:100,
            transition:{ delay: i * 0.2},
        }),
        hidden:{opacity:0},
    }
    const items = [
        "item1","item2","item3","item4",
    ]
  return (
    <div className="course">
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item,i) => (
                <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
            ))}
            
        </motion.ul>
        {/* <motion.div className="box"
            variants={variants}
            // transition={{duration:2}}
            animate={open ? "visible" : "hidden"}
        >
        </motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click</button> */}
    </div>
  )
}

export default Test
