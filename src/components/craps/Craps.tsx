import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { buildDie, rotateDie } from './DiceBuild';

let die1: string, die2: string;

// Dice size
const dieSize: string = 'w-[100px] h-[100px]';
// Shake
const random_shake = () =>
  rotateDie[Math.floor(Math.random() * rotateDie.length)];
// Build each die
const DIE: { transform: string; src: string; alt: string }[] = buildDie;

StartGame();
function StartGame() {
  die1 = rotateDie[4];
  die2 = rotateDie[4];
}

// Dice framer motion animation
const item = {
  visible: { scale: [0, 1] },
  hidden: { scale: [0, 1] },
};

export default function Craps() {
  const [topface, setTopface] = useState(() => {
    return true;
  });

  useEffect(() => {
    die1 = random_shake();
    die2 = random_shake();
  }, [topface]);

  const DICE = [die1, die2];

  const shootDice = DICE.map((roll, index) => (
    <motion.li
      // scene
      onClick={() => setTopface(!topface)}
      key={index}
      style={{
        perspective: '400px',
      }}
      className={`${dieSize} mx-auto portrait:my-12`}
      animate={topface ? 'visible' : 'hidden'}
      initial="hidden"
      variants={item}
      transition={{ duration: 0.6 }}
    >
      <div
        // cube
        style={{
          transform: `${roll}`,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 1.2s',
        }}
        className={`${dieSize}`}
      >
        {DIE.map((spot, index: number) => (
          <div
            // dieFace
            key={index}
            style={{
              transform: `${spot.transform}`,
              background: 'hsla(0, 90%, 50%, 0.7)',
              position: 'absolute',
            }}
            className={`${dieSize}`}
          >
            <img src={spot.src} className={`${dieSize}`} alt={spot.alt} />
          </div>
        ))}
      </div>
    </motion.li>
  ));

  return (
    <div className="landscapeFelt portraitFelt bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <div className="w-1/2 h-full mx-auto">
        <ul className="h-full grid grid-cols-2 gap-4 content-center portrait:grid-cols-1">
          {shootDice}
        </ul>
      </div>
    </div>
  );
}
