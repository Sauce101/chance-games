import { useState } from 'react';
import { pokerDie } from './PokeDiceBuild';
import { motion } from 'framer-motion';

const numberOfSides = pokerDie.length;
const shuffle = () => {
  for (let i = numberOfSides - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const oldValue = pokerDie[newIndex];
    pokerDie[newIndex] = pokerDie[i];
    pokerDie[i] = oldValue;
  }
};
let die1: string[],
  dieFace1: string | undefined,
  die2: string[],
  dieFace2: string | undefined,
  die3: string[],
  dieFace3: string | undefined,
  die4: string[],
  dieFace4: string | undefined,
  die5: string[],
  dieFace5: string | undefined;

const StartDice = () => {
  const allSides = Math.ceil(numberOfSides);
  shuffle();
  die1 = pokerDie.slice(0, allSides);
  dieFace1 = die1.pop();
  shuffle();
  die2 = pokerDie.slice(0, allSides);
  dieFace2 = die2.pop();
  shuffle();
  die3 = pokerDie.slice(0, allSides);
  dieFace3 = die3.pop();
  shuffle();
  die4 = pokerDie.slice(0, allSides);
  dieFace4 = die4.pop();
  shuffle();
  die5 = pokerDie.slice(0, allSides);
  dieFace5 = die5.pop();
};
StartDice();

const PokerDice = () => {
  const [nextDice, setNextDice] = useState(() => {
    return false;
  });
  const [holdState1, setHoldState1] = useState(() => {
    return false;
  });
  const [holdState2, setHoldState2] = useState(() => {
    return false;
  });
  const [holdState3, setHoldState3] = useState(() => {
    return false;
  });
  const [holdState4, setHoldState4] = useState(() => {
    return false;
  });
  const [holdState5, setHoldState5] = useState(() => {
    return false;
  });

  const dealHand = () => {
    setNextDice(false);
    setHoldState1(false);
    setHoldState2(false);
    setHoldState3(false);
    setHoldState4(false);
    setHoldState5(false);
    StartDice();
  };

  const drawHand = () => {
    if (!holdState1) dieFace1 = die1.pop();
    if (!holdState2) dieFace2 = die2.pop();
    if (!holdState3) dieFace3 = die3.pop();
    if (!holdState4) dieFace4 = die4.pop();
    if (!holdState5) dieFace5 = die5.pop();
    setNextDice(true);
  };

  const hold1 = () => setHoldState1(!holdState1);
  const hold2 = () => setHoldState2(!holdState2);
  const hold3 = () => setHoldState3(!holdState3);
  const hold4 = () => setHoldState4(!holdState4);
  const hold5 = () => setHoldState5(!holdState5);

  const POSITION = [
    {
      play: dieFace1,
      spinrate: '0.5s',
      hold: holdState1,
      holdset: hold1,
    },
    {
      play: dieFace2,
      spinrate: '0.6s',
      hold: holdState2,
      holdset: hold2,
    },
    {
      play: dieFace3,
      spinrate: '0.6s',
      hold: holdState3,
      holdset: hold3,
    },
    {
      play: dieFace4,
      spinrate: '0.7s',
      hold: holdState4,
      holdset: hold4,
    },
    {
      play: dieFace5,
      spinrate: '0.7s',
      hold: holdState5,
      holdset: hold5,
    },
  ];

  // Delt
  const dieListDelt = POSITION.map((spot, index) => (
    <motion.li
      key={index}
      className="w-32 portrait:w-[18%] portrait:mx-auto p-2 portrait:h-auto"
    >
      <div className="md:h-8 portrait:hidden">
        {spot.hold ? (
          <p className="text-white text-center md:text-xl">HELD</p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
      <motion.div
        className="animate-[pokerDiceRotate_.5s_1_ease-out] radius-[20%]"
        onClick={spot.holdset}
      >
        {spot.hold ? (
          <img
            src={spot.play}
            className="outline outline-offset-2 outline-yellow-400"
          />
        ) : (
          <img src={spot.play} />
        )}
      </motion.div>
    </motion.li>
  ));

  // Drawn
  const dieListDrawn = POSITION.map((spot, index) => (
    <motion.li
      key={index}
      className="w-32 portrait:w-[18%] portrait:mx-auto p-2 portrait:h-auto"
    >
      <div className="md:h-8 portrait:hidden">
        {spot.hold ? (
          <p className="text-white text-center md:text-xl">HELD</p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
      <div
        className={`${
          !spot.hold ? 'animate-[pokerDiceRotate_.5s_1_ease-out]' : ''
        } radius-[20%]`}
      >
        {spot.hold ? (
          <img
            src={spot.play}
            className="outline outline-offset-2 outline-yellow-400"
          />
        ) : (
          <img src={spot.play} />
        )}
      </div>
    </motion.li>
  ));

  return (
    <div className="flex flex-col  justify-center min-h-screen bg-green-950">
      {/* <div className=""> */}
      <ul className="grid portrait:grid-rows-5 landscape:grid-cols-5 justify-items-center portrait:gap-5">
        {!nextDice ? dieListDelt : dieListDrawn}
      </ul>
      {!nextDice ? (
        <button
          className="w-32 bg-orange-400 text-white mx-auto landscape:mt-8 border-orange-950 rounded-lg portrait:mt-4"
          onClick={drawHand}
        >
          DRAW
        </button>
      ) : (
        <button
          className="w-32 bg-orange-400 text-white mx-auto landscape:mt-8 border-orange-950 rounded-lg portrait:mt-4"
          onClick={dealHand}
        >
          DEAL
        </button>
      )}
      {/* </div> */}
    </div>
  );
};
export default PokerDice;
