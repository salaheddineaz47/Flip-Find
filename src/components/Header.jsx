import Button from "./Button";
import ConfirmRemovalDialog from "./ConfirmRemovalDialog";
import Logo from "./Logo";
import { confirmAlert } from "react-confirm-alert";
import { useMemoryGame } from "./MemoryGameProvider";

function Header() {
  const { onNewGame, onRestartGame } = useMemoryGame();

  function handleRestartGame() {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmRemovalDialog
          onClose={onClose}
          onConfirm={onRestartGame}
          confirmMessage="Yes, Restart it"
          message=" Do you really want to restart this Game? This action cannot be
          undone. "
        />
      ),
    });
  }

  function handleNewGame() {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmRemovalDialog
          onClose={onClose}
          onConfirm={onNewGame}
          confirmMessage="Yes, end it"
          message=" Do you really want to end this Game? This action cannot be
          undone. "
        />
      ),
    });
  }
  return (
    <div className="flex flex-wrap items-center sm:justify-around justify-between  w-full mb-6 ml-[50px] sm:ml-0">
      <Logo />
      <div className="w-60 flex gap-3 ">
        <Button
          onClick={handleRestartGame}
          className="bg-purple-500 hover:bg-purple-700  text-white"
        >
          Restart
        </Button>
        <Button onClick={handleNewGame}>New Game</Button>
      </div>
    </div>
  );
}

export default Header;
