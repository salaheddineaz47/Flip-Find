import PlayGround from "./components/PlayGround";
import MemoryGameWelcome from "./components/MemoryGameWelcome";
import Header from "./components/Header";
import Modal from "./components/Modal";
import {
  MemoryGameProvider,
  useMemoryGame,
} from "./components/MemoryGameProvider";

function App() {
  return (
    <MemoryGameProvider>
      <MemoryGameContent />
    </MemoryGameProvider>
  );
}

function MemoryGameContent() {
  const { isGameStarted, isGameOver } = useMemoryGame();

  if (!isGameStarted) return <MemoryGameWelcome />;

  return (
    <div className="min-h-screen md:p-8 p-2 w-full bg-gray-50">
      <Header />
      <PlayGround />
      {isGameOver && <Modal />}
    </div>
  );
}

export default App;
