/* eslint-disable @typescript-eslint/no-explicit-any */
import RedDBack from '../../../assets/playingCards/cardsSVG/plain/2B.svg';
import DarkDBack from '../../../assets/playingCards/cardsSVG/plain/1B.svg';

const DeckCardData = ({ flipCards, nextdeck, cardSizes }: any) => {
  return (
    <div className={cardSizes}>
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
