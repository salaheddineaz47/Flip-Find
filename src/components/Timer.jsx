import Box from "./Box";
import { useMemoryGame } from "./MemoryGameProvider";

const Timer = ({ label = "Time", width = "w-full" }) => {
  const { timeCount } = useMemoryGame();

  const minutes = Math.floor(timeCount / 60);
  const seconds = timeCount % 60;
  return (
    <Box width={width}>
      <span>{label} :</span>
      <div className="flex">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </Box>
  );
};
export default Timer;
