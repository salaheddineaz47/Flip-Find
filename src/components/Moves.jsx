import Box from "./Box";
import { useMemoryGame } from "./MemoryGameProvider";

function Moves({ width = "w-full" }) {
  const { moves } = useMemoryGame();
  return (
    <Box width={width}>
      <span>Moves:</span>
      <span>{moves || 0}</span>
    </Box>
  );
}

export default Moves;
