import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import Button from "./Button";
import { useMemoryGame } from "./MemoryGameProvider";

const allGameOptions = {
  themes: ["joker Cards", "pokemon Cards"],
  gridSizes: [
    [6, 6],
    [4, 4],
  ],
};

const GameOptionSelect = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedGrid, setSelectedGrid] = useState(null);
  const { onStartGame } = useMemoryGame();

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleGridSelect = (grid) => {
    setSelectedGrid(grid);
  };

  const handleStartGame = () => {
    if (!selectedGrid || !selectedTheme) {
      toast.error(
        "You must choose the Grid size and the theme to start the Game",
        {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      );
      return;
    }
    const options = { theme: selectedTheme, gridSize: selectedGrid };
    onStartGame(options);
  };

  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf3] shadow-2xl rounded-2xl p-8 w-full max-w-md mt-8">
      {/* Theme Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Choose Theme
        </h3>
        <div className="flex space-x-4 justify-center">
          {allGameOptions.themes.map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeSelect(theme)}
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 
                          text-sm font-semibold uppercase tracking-wider
                          ${
                            selectedTheme === theme
                              ? "bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white shadow-lg"
                              : "bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-[#7f53ac] hover:to-[#647dee] focus:bg-gradient-to-r focus:from-[#7f53ac] focus:to-[#647dee]"
                          }
                          transform hover:scale-105 focus:scale-105`}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Size Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Choose Grid Size
        </h3>
        <div className="flex space-x-4 justify-center">
          {allGameOptions.gridSizes.map((grid) => (
            <button
              key={grid}
              onClick={() => handleGridSelect(grid)}
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 
                          text-sm font-semibold uppercase tracking-wider 
                          ${
                            selectedGrid === grid
                              ? "bg-gradient-to-r from-[#00b09b] to-[#96c93d] text-white shadow-lg"
                              : "bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-[#00d4b5] hover:to-[#a4e345] focus:bg-gradient-to-r focus:from-[#00d4b5] focus:to-[#a4e345]"
                          }
                          transform hover:scale-105 focus:scale-105`}
            >
              {`${grid[0]} x ${grid[1]}`}
            </button>
          ))}
        </div>
      </div>

      {/* Start Game Button */}
      <Button
        className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 hover:from-purple-700 hover:via-blue-600 hover:to-green-500 text-white mt-6 w-full"
        onClick={handleStartGame}
      >
        Start Game
      </Button>
    </div>
  );
};

export default GameOptionSelect;
