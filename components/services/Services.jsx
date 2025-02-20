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
    animate ={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>私はお肉が大好物、お肉のために
            <br />働いていると言っても過言ではない！！
        </p><hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/city.jpg" alt=""  />
            <h1><motion.b style={{ 
        background: "rgba(0, 0, 0, 0)", // 初期値を rgba() で設定
        color: "rgba(211, 211, 211, 1)" // 初期値を rgba() で設定
    }}
            whileHover={{color:"rgba(15, 85, 114, 1)"}}> ユニークな</motion.b> アイデア</h1>
        </div>

        <div className="title">
            <h1><motion.b whileHover={{color:"rgba(15, 85, 114, 1)"}}>あなたの</motion.b> ビジネスのために</h1>
            <motion.button style={{ 
        background: "rgba(0, 0, 0, 0)", // 初期値を rgba() で設定
        color: "rgba(211, 211, 211, 1)" // 初期値を rgba() で設定
    }}
    whileHover={{ 
        background: "rgba(211, 211, 211, 1)", // lightgray の代わり
        color: "rgba(0, 0, 0, 1)" // black の代わり
    }}>私たちがやっていること?</motion.button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>

      <motion.div className="box" 
      style={{ 
        background: "rgba(0, 0, 0, 0)", // 初期値を rgba() で設定
        color: "rgba(211, 211, 211, 1)",// 初期値を rgba() で設定
        }}

        whileHover={{ 
            background: "rgba(211, 211, 211, 1)", // lightgray の代わり
            color: "rgba(0, 0, 0, 1)", // black の代わり
        }}>
         <h2>こだわり抜いたデザインを追求!</h2>
            <p>「見た目が美しいだけでなく、使いやすさも兼ね備えたデザイン」を常に意識しています。
            ユーザーの視点に立ち、細部までこだわり抜いたUI/UX設計を心がけ、心地よく使えるWebサイトを提供します。
            </p>
            <motion.button style={{ 
        background: "rgba(0, 0, 0, 1)" // 初期値を rgba() で設定
        ,color: "rgba(211, 211, 211, 1)" // 初期値を rgba() で設定
    }}
    whileHover={{ 
        background: "rgba(15, 85, 114, 1)", // lightgray の代わり
        color: "rgba(211, 211, 211, 1)", // black の代わり
    }}>Go</motion.button>
        </motion.div>

        <motion.div className="box" 
      style={{ 
        background: "rgba(0, 0, 0, 0)", // 初期値を rgba() で設定
        color: "rgba(211, 211, 211, 1)",// 初期値を rgba() で設定
        }}

        whileHover={{ 
            background: "rgba(211, 211, 211, 1)", // lightgray の代わり
            color: "rgba(0, 0, 0, 1)", // black の代わり
        }}>
         <h2>チャレンジ精神旺盛</h2>
            <p>新しい技術やトレンドに対して積極的に挑戦し、成長し続けることを大切にしています。
            「もっと良い方法はないか？」と常に考えながら、より高品質なWebサイト制作に取り組んでいます。
            </p>
            <motion.button style={{ 
        background: "rgba(0, 0, 0, 1)" // 初期値を rgba() で設定
        ,color: "rgba(211, 211, 211, 1)" // 初期値を rgba() で設定
    }}
    whileHover={{ 
        background: "rgba(15, 85, 114, 1)", // lightgray の代わり
        color: "rgba(211, 211, 211, 1)", // black の代わり
    }}>Go</motion.button>
        </motion.div>
        <motion.div className="box" 
      style={{ 
        background: "rgba(0, 0, 0, 0)", // 初期値を rgba() で設定
        color: "rgba(211, 211, 211, 1)",// 初期値を rgba() で設定
        }}

        whileHover={{ 
            background: "rgba(211, 211, 211, 1)", // lightgray の代わり
            color: "rgba(0, 0, 0, 1)", // black の代わり
        }}>
         <h2>新しい技術はとりあえず触ってみる！!</h2>
            <p>React・Next.js・WordPress・GSAP・Three.js など、気になった技術はすぐに試してみるスタイル。
            手を動かしながら学び、プロジェクトに活かせるかを検証することで、実践的なスキルを磨いています。
            </p>
            <motion.button style={{ 
        background: "rgba(0, 0, 0, 1)" // 初期値を rgba() で設定
        ,color: "rgba(211, 211, 211, 1)" // 初期値を rgba() で設定
    }}
    whileHover={{ 
        background: "rgba(15, 85, 114, 1)", // lightgray の代わり
        color: "rgba(211, 211, 211, 1)", // black の代わり
    }}>Go</motion.button>
        </motion.div>
        <motion.div className="box" 
      style={{ 
        background: "rgba(0, 0, 0, 0)", // 初期値を rgba() で設定
        color: "rgba(211, 211, 211, 1)",// 初期値を rgba() で設定
        }}

        whileHover={{ 
            background: "rgba(211, 211, 211, 1)", // lightgray の代わり
            color: "rgba(0, 0, 0, 1)", // black の代わり
        }}>
         <h2>デザイン × 技術 のバランス!</h2>
            <p>常に進化し続けるWebの世界で、新しいチャレンジを楽しみながら、最高の体験を提供します。 
            </p>
            <motion.button style={{ 
        background: "rgba(0, 0, 0, 1)" // 初期値を rgba() で設定
        ,color: "rgba(211, 211, 211, 1)" // 初期値を rgba() で設定
    }}
    whileHover={{ 
        background: "rgba(15, 85, 114, 1)", // lightgray の代わり
        color: "rgba(211, 211, 211, 1)", // black の代わり
    }}>Go</motion.button>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
