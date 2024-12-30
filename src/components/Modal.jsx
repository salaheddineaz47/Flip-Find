import Button from "./Button";
import { useMemoryGame } from "./MemoryGameProvider";
import Moves from "./Moves";
import Timer from "./Timer";
import Confetti from "react-confetti";

const getResultMessage = (theme, isSmallGrid, time, moves) => {
  const themePrefix = theme === "joker" ? "Joker" : "Pokemon";

  if (isSmallGrid) {
    if (time < 60 && moves <= 20) {
      return `🎭 Quick Match! You mastered the ${themePrefix}s in no time!`;
    } else {
      return `🌟 Good Work! You completed the small grid with the ${themePrefix}s. Keep practicing! 🕰️`;
    }
  } else {
    if (time < 180 && moves <= 50) {
      return `🃏 Well Done! You aced the big ${themePrefix} grid! 🎉`;
    } else {
      return `🕵️ Nice Try! You completed the big ${themePrefix} grid. Keep it up! 🕰️`;
    }
  }
};

const Modal = () => {
  const {
    timeElapsed,
    movesResult,
    onRestartGame,
    onNewGame,
    isSmallGrid,
    selectedOptions: { theme },
  } = useMemoryGame();

  const resultMessage = getResultMessage(
    theme,
    isSmallGrid,
    timeElapsed,
    movesResult
  );

  return (
    <>
      {timeElapsed < 60 && <Confetti />}
      <div className="fixed inset-0 bg-black/50 z-40"></div>
      <div className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 z-50">
        <div className="w-[90%] sm:w-full sm:max-w-[500px] rounded-[20px] bg-gray-50 text-gray-800 text-center dark:bg-dark-2 px-[30px] py-[30px] ">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">
            Congratulations!
          </h3>
          <p className="mb-10 text-lg leading-relaxed text-gray-800  text-center">
            {resultMessage}
          </p>
          <div>
            <Timer label="Time Elapsed" />
            <br />
            <br />
            <Moves />
          </div>
          <div className="flex justify-center mt-8 ">
            <div className="flex gap-3 w-full">
              <Button
                onClick={onRestartGame}
                className="bg-purple-500 hover:bg-purple-600  text-white"
              >
                Restart
              </Button>
              <Button onClick={onNewGame}>New Game</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
