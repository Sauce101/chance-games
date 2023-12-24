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

  const cardSizes: string =
    'portrait:tall:w-[60%] portrait:tall2x:w-[80%] portrait:w-[40%] rounded-2xl shadow-2xl shadow-green-700/30 mx-auto landscape:w-[80%] landscape:laptop:w-full';

  return (
    <div className="flex flex-col justify-center min-h-screen bg-green-950 align-middle">
      <div className="landscape:grid landscape:grid-cols-3 portrait:flex portrait:flex-col mx-16 portrait:gap-5 portrait:tall:gap-12">
        <div
          className="mx-auto"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {topcard && (
            <PlayerOneData
              playerOneCard={playerOneCard}
              nextdeck={nextdeck}
              cardSizes={cardSizes}
            />
          )}
          {!topcard && (
            <PlayerOneData
              playerOneCard={playerOneCard}
              nextdeck={nextdeck}
              cardSizes={cardSizes}
            />
          )}
        </div>

        <div className="mx-auto" style={{ perspective: '1000px' }}>
          <DeckCardData
            flipCards={flipCards}
            nextdeck={nextdeck}
            cardSizes={cardSizes}
          />
        </div>

        <div
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          className="mx-auto"
        >
          {topcard && (
            <PlayerTwoData
              playerTwoCard={playerTwoCard}
              nextdeck={nextdeck}
              cardSizes={cardSizes}
            />
          )}
          {!topcard && (
            <PlayerTwoData
              playerTwoCard={playerTwoCard}
              nextdeck={nextdeck}
              cardSizes={cardSizes}
            />
          )}
        </div>
      </div>
    </div>
  );
}
