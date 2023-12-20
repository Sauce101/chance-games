/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { freshDeck } from '../../assets/playingCards/decks/PlainDeck';
import PlayerOneData from './cardData/PlayerOneData';
import PlayerTwoData from './cardData/PlayerTwoData';
import DeckCardData from './cardData/DeckCardData';

let playerOneDeck: any,
  playerTwoDeck: any,
  playerOneCard: any,
  playerTwoCard: any,
  deckMidpoint: any;

const cards = freshDeck;

const StartGame = () => {
  const deck: any = cards;
  const numberOfCards = deck.length;

  const shuffle = () => {
    for (let i = numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = deck[newIndex];
      deck[newIndex] = deck[i];
      deck[i] = oldValue;
    }
  };

  shuffle();

  deckMidpoint = Math.ceil(numberOfCards / 2);

  playerOneDeck = deck.slice(0, deckMidpoint);
  playerTwoDeck = deck.slice(deckMidpoint, numberOfCards);

  playerOneCard = playerOneDeck.shift();
  playerTwoCard = playerTwoDeck.shift();
};
StartGame();

export default function HighCard() {
  const [topcard, setTopcard] = useState(() => {
    return true;
  });
  const [nextdeck, setNextdeck] = useState(() => {
    return true;
  });

  useEffect(() => {
    playerOneCard = playerOneDeck.shift();
    playerTwoCard = playerTwoDeck.shift();
    if (playerOneDeck.length === 0) {
      StartGame();
      setNextdeck(!nextdeck);
    }
  }, [topcard, nextdeck]);

  const flipCards = () => setTopcard(!topcard);

  // Card size
  // const cardsize: any = {
  //   radius: '14px',
  //   cardWidthL: '70%',
  //   cardWidthPsm: '32%',
  //   cardWidthP: '40%',
  //   cardWidthPmd: '26%',
  // };

  // const styleOrientation = {
  //   '@media (orientation: portrait)': {
  //     display: 'grid',
  //     // gridTemplateColumns: "1fr",
  //     gridTemplate: 'repeat(3, 1fr) / 1fr',
  //     gap: 3,
  //   },
  //   '@media (orientation: landscape)': {
  //     display: 'grid',
  //     gridTemplate: '1fr / repeat(3, 1fr)',
  //     gap: 5,
  //     px: 5,
  //   },
  // };

  return (
    <div className="flex flex-col justify-evenly min-h-screen bg-green-950 align-middle">
      {/* <div className={`${styleOrientation}`}> */}
      <div className="landscape:grid landscape:grid-cols-3 landscape:gap-3 portrait:flex portrait:flex-col portrait:flex-wrap mx-16 portrait:gap-5">
        <div
          className="mx-auto"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {topcard && (
            <PlayerOneData playerOneCard={playerOneCard} nextdeck={nextdeck} />
          )}
          {!topcard && (
            <PlayerOneData playerOneCard={playerOneCard} nextdeck={nextdeck} />
          )}
        </div>

        <div className="mx-auto" style={{ perspective: '1000px' }}>
          <DeckCardData flipCards={flipCards} nextdeck={nextdeck} />
        </div>

        <div
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          className="mx-auto"
        >
          {topcard && (
            <PlayerTwoData playerTwoCard={playerTwoCard} nextdeck={nextdeck} />
          )}
          {!topcard && (
            <PlayerTwoData playerTwoCard={playerTwoCard} nextdeck={nextdeck} />
          )}
        </div>
      </div>
    </div>
  );
}
