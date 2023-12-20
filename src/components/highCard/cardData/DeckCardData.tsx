/* eslint-disable @typescript-eslint/no-explicit-any */
import RedDBack from '../../../assets/playingCards/cardsSVG/plain/2B.svg';
import DarkDBack from '../../../assets/playingCards/cardsSVG/plain/1B.svg';

const DeckCardData = ({ flipCards, nextdeck }: any) => {
  // const styleDeckCardData = {
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
  //   },
  //   '@media (orientation: landscape)': {
  //     maxWidth: cardsize.cardWidthL,
  //     borderRadius: cardsize.radius,
  //     mx: 'auto',
  //   },
  // };

  return (
    <div
      className="mobile:max-w-[60%] rounded-2xl shadow-2xl shadow-green-700/30 mx-auto"
      // className={`${styleDeckCardData} rounded-2xl shadow-2xl shadow-green-700/30`}
    >
      <div
        onClick={flipCards}
        style={{
          color: 'red',
          ...(nextdeck === false && { color: 'black' }),
        }}
      >
        <img src={nextdeck ? RedDBack : DarkDBack} alt="red diamond back" />
      </div>
    </div>
  );
};

export default DeckCardData;
