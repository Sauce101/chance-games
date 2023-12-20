/* eslint-disable @typescript-eslint/no-explicit-any */
import RedDBack from '../../../assets/playingCards/cardsSVG/plain/2B.svg';
import DarkDBack from '../../../assets/playingCards/cardsSVG/plain/1B.svg';

const PlayerOneData = ({ playerOneCard, nextdeck }: any) => {
  // const stylePlayerOneCard = {
  //   // Adding media query..
  //   '@media (orientation: portrait)': {
  //     '@media (max-height: 739px)': {
  //       maxWidth: cardsize.cardWidthPsm,
  //     },
  //     '@media (min-height: 740px) and (max-height: 915px)': {
  //       maxWidth: cardsize.cardWidthP,
  //     },
  //     '@media (min-height: 916px)': {
  //       maxWidth: cardsize.cardWidthPmd,
  //     },
  //     maxHeight: '100%',
  //     borderRadius: cardsize.radius,
  //     position: 'relative',
  //     top: '0',
  //     bottom: '0',
  //     left: '0',
  //     right: '0',
  //     margin: 'auto',
  //     animation: 'rotationPortrait .5s 1 linear',
  //     backfaceVisibility: 'hidden',
  //   },
  //   '@media (orientation: landscape)': {
  //     maxWidth: `${cardsize.cardWidthL}`,
  //     borderRadius: `${cardsize.radius}`,
  //     animation: 'rotationLandscape .5s 1 linear',
  //     backfaceVisibility: 'hidden',
  //     position: 'relative',
  //     top: '0',
  //     bottom: '0',
  //     left: '0',
  //     right: '0',
  //     margin: 'auto',
  //   },
  // };

  // const stylePlayerOneCardBack = {
  //   '@media (orientation: portrait)': {
  //     '@media (max-height: 739px)': {
  //       maxWidth: cardsize.cardWidthPsm,
  //     },
  //     '@media (min-height: 740px) and (max-height: 915px)': {
  //       maxWidth: cardsize.cardWidthP,
  //     },
  //     '@media (min-height: 916px)': {
  //       maxWidth: cardsize.cardWidthPmd,
  //     },
  //     maxHeight: '100%',
  //     borderRadius: cardsize.radius,
  //     position: 'absolute',
  //     top: '0',
  //     left: '0',
  //     bottom: '0',
  //     right: '0',
  //     margin: 'auto',
  //     animation: 'backsidePortrait',
  //     backfaceVisibility: 'hidden',
  //   },
  //   '@media (orientation: landscape)': {
  //     maxWidth: cardsize.cardWidthL,
  //     borderRadius: cardsize.radius,
  //     animation: 'backsideLandscape',
  //     backfaceVisibility: 'hidden',
  //     position: 'absolute',
  //     top: '0',
  //     bottom: '0',
  //     left: '0',
  //     right: '0',
  //     margin: 'auto',
  //   },
  // };

  return (
    <>
      {/* PlayerOneCardBack */}
      <div className="animate-[backsideLandscape_.5s_1_linear] top-0 right-0 bottom-0 left-0 m-auto absolute mobile:max-w-[60%] backfaceH rounded-2xl shadow-lg shadow-green-700/30">
        <img src={nextdeck ? RedDBack : DarkDBack} alt="card" />
      </div>
      {/* PlayerOneCard */}
      <div className="mobile:max-w-[60%] animate-[rotationLandscape_.5s_1_linear] relative top-0 right-0 bottom-0 left-0 m-auto backfaceH rounded-2xl shadow-lg shadow-green-700/30">
        <img src={playerOneCard} alt="card" />
      </div>
    </>
  );
};

export default PlayerOneData;
