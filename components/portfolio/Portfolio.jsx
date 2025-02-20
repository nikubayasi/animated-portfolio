import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from 'react';
const items = [
  {
    id:1,
    title:"React 開発",
    img:"https://res.cloudinary.com/do3kyzzgy/image/upload/v1739894798/pc1_wnivky.webp",
    desc:"再利用性の高いコンポーネントを設計し、保守性の高いフロントエンドを構築します。Atomic Designの考え方を取り入れ、スケーラブルなUIを実現します。",

  },
  {
    id:2,
    title:"Next.jsを活用したパフォーマンス最適化",
    img:"https://res.cloudinary.com/do3kyzzgy/image/upload/v1739894798/pc2_eplls1.webp",
    desc:"SSR（サーバーサイドレンダリング）やISR（インクリメンタル静的生成）を活用し、SEOに強く、高速なWebサイトを構築します。",
    
  },
  {
    id:3,
    title:"API連携 & データ管理",
    img:"https://res.cloudinary.com/do3kyzzgy/image/upload/v1739894992/DALL_E_2025-02-19_01.09.36_-_A_close-up_view_of_a_programmer_s_hands_typing_on_a_black_Dell_laptop_keyboard_in_a_dimly_lit_room._The_laptop_screen_emits_a_bright_glow_displaying_fjsyay.webp",
    desc:"WordPressのREST APIやGraphQL（WPGraphQL）を活用し、ヘッドレスCMSとしてWordPressとReactを組み合わせたサイト開発が可能です。また、Redux / Zustand / React Query などの状態管理ライブラリを活用し、効率的なデータ管理を行います",
    
  },
  {
    id:4,
    title:"スタイリング & UIフレームワーク",
    img:"https://res.cloudinary.com/do3kyzzgy/image/upload/v1739895030/Leonardo_Anime_XL_masterpieceultra_detailed16_pc_casual_fassio_5_fl1rcn.jpg",
    desc:"Tailwind CSS / Material UI / Chakra UI などのフレームワークを使用し、デザイン性とパフォーマンスを両立。アニメーションにはFramer Motionを活用し、ユーザー体験を向上させます。",
    
  },
];

const Single = ({item}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({target:ref, offset:["start start","end start"]
   });
  // const scaleX = useTransform(scrollYProgress,{
  //   stiffness:100,
  //   damping:30,
  // });
  const y = useTransform(scrollYProgress, [0,1], [-300,300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="project image" />
          </div>
          <motion.div className="textContainer" >
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
  const { scrollYProgress } = useScroll({target:ref, offset:["start start", "end start"]});

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
