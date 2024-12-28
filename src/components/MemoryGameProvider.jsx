import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  useRef,
} from "react";

const MemoryGameContext = createContext();
function MemoryGameProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matches, setMatches] = useState(0);
  const [timeCount, setTimeCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [moves, setMoves] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [movesResult, setMovesResult] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const timerRef = useRef(null);

  const isGamerWinner = cards.length > 0 && matches === cards.length / 2;
  const gridSize = selectedOptions.gridSize || [0, 0];
  const isSmallGrid = gridSize[0] === 4;

  const numCards = gridSize[0] * gridSize[1];

  const themeCards = Array.from(
    {
      length: numCards / 2,
    },
    (_, i) =>
      `assets/cards imgs/${
        selectedOptions.theme === "pokemon Cards" ? "pokemon" : "joker"
      }/card${i + 1}.${
        selectedOptions.theme === "pokemon Cards" ? "png" : "jpeg"
      }`
  );

  const handleStartGame = (options) => {
    setIsGameStarted(true);
    setSelectedOptions(options);
  };

  const createCards = () => {
    let numbers = Array.from({ length: numCards / 2 }, (_, i) => i);

    numbers = [...numbers, ...numbers];

    const shuffled = numbers.sort(() => 0.5 - Math.random());

    const newCards = shuffled.map((number) => ({
      img: themeCards[number],
      isFlipped: false,
    }));
    setCards(newCards);
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (isGameStarted) {
      timerRef.current = setInterval(() => {
        setTimeCount((prevTimeCount) => {
          return prevTimeCount + 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isGameOver) {
      setTimeElapsed(timeCount);
      setMovesResult(moves);
    }
  }, [isGameOver]);

  useEffect(() => {
    if (isGamerWinner) {
      setIsGameOver(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [isGamerWinner]);

  const flipCard = (id) => {
    if (
      isGameOver ||
      cards[id].isFlipped ||
      firstCard === id ||
      secondCard === id ||
      (firstCard !== null && secondCard !== null)
    ) {
      return;
    }

    const newCards = cards.map((card, index) => ({
      ...card,
      isFlipped: index === id ? !card.isFlipped : card.isFlipped,
    }));
    setCards(newCards);

    if (firstCard === null) {
      setFirstCard(id);
    } else if (secondCard === null) {
      setSecondCard(id);
    }
  };

  const checkMatch = useCallback(() => {
    if (cards[firstCard].img === cards[secondCard].img) {
      setMatches(matches + 1);
      setFirstCard(null);
      setSecondCard(null);
    } else {
      setTimeout(() => {
        const newCards = cards.map((card, index) => {
          if (index === firstCard || index === secondCard) {
            return {
              ...card,
              isFlipped: false,
            };
          } else {
            return card;
          }
        });
        setCards(newCards);
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  }, [cards, firstCard, secondCard, matches]);

  useEffect(() => {
    if (isGameStarted) {
      createCards();
      startTimer();
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (secondCard) {
      setMoves(moves + 1);
    }
  }, [secondCard]);

  useEffect(() => {
    if (firstCard !== null && secondCard !== null) {
      checkMatch();
    }
  }, [firstCard, secondCard, checkMatch]);

  const resetGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsGameOver(false);
    setMatches(0);
    setTimeCount(0);
    setFirstCard(null);
    setSecondCard(null);
    setTimeElapsed(0);
    setMovesResult(0);
    setMoves(0);
    createCards();
    if (isGameStarted) startTimer();
  };

  const handleNewGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsGameStarted(false);
    setIsGameOver(false);
    setMatches(0);
    setTimeCount(0);
    setFirstCard(null);
    setSecondCard(null);
    setTimeElapsed(0);
    setMovesResult(0);
    setMoves(0);
    setCards([]);
  };
  useEffect(() => {
    if (isGameOver) document.title = "Flip & Find || Congrats! You Won! 🎉";
    return () =>
      (document.title = "Flip & Find || Test Your Memory and Have Fun!");
  }, [isGameOver]);

  return (
    <MemoryGameContext.Provider
      value={{
        cards,
        timeCount,
        isGameOver,
        isGameStarted,
        moves,
        timeElapsed,
        movesResult,
        selectedOptions,
        gridSize,
        isSmallGrid,
        onStartGame: handleStartGame,
        onCardClick: flipCard,
        onRestartGame: resetGame,
        onNewGame: handleNewGame,
      }}
    >
      {children}
    </MemoryGameContext.Provider>
  );
}

function useMemoryGame() {
  const context = useContext(MemoryGameContext);
  if (context === undefined)
    throw new Error(
      "MemoryGameContext was used outside of the MemoryGameProvider"
    );
  return context;
}
export { MemoryGameProvider, useMemoryGame };
