/* eslint-disable @typescript-eslint/no-explicit-any */
import RedDBack from '../../../assets/playingCards/cardsSVG/plain/2B.svg';
import DarkDBack from '../../../assets/playingCards/cardsSVG/plain/1B.svg';

const PlayerOneData = ({ playerOneCard, nextdeck, cardSizes }: any) => {
  return (
    <>
      {/* PlayerOneCardBack */}
      <div
        className={`${cardSizes} animate-[backsideLandscape_.5s_1_linear] top-0 right-0 bottom-0 left-0 m-auto absolute backfaceH rounded-2xl shadow-lg shadow-green-700/30`}
      >
        <img src={nextdeck ? RedDBack : DarkDBack} alt="card" />
      </div>
      {/* PlayerOneCard */}
      <div
        className={`${cardSizes} animate-[rotationLandscape_.5s_1_linear] relative top-0 right-0 bottom-0 left-0 m-auto backfaceH rounded-2xl shadow-lg shadow-green-700/30`}
      >
        <img src={playerOneCard} alt="card" />
      </div>
    </>
  );
};

export default PlayerOneData;
