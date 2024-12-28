import Card from "./Card";
import { useMemoryGame } from "./MemoryGameProvider";
import Moves from "./Moves";
import Timer from "./Timer";

const PlayGround = () => {
  const { cards, gridSize } = useMemoryGame();
  const isBigGrid = gridSize[0] === 6;

  return (
    <div className="relative flex flex-col sm:flex-row sm:gap-4  justify-between   items-center mb-6 w-full h-[80vh]">
      <div
        className="responsive-grid "
        style={{
          "--grid-cols": gridSize[0],
          "--grid-rows": gridSize[1],
          "--col-width": isBigGrid ? "70px" : "100px",
          "--row-height": isBigGrid ? "80px" : "100px",
          "--col-width-sm": isBigGrid ? "50px" : "80px",
          "--row-height-sm": isBigGrid ? "60px" : "80px",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            id={index}
            img={card.img}
            isFlipped={card.isFlipped}
          />
        ))}
      </div>
      <div className="flex sm:flex-col flex-row  justify-center gap-3 ">
        <Timer width="w-50" />
        <Moves width="28" />
      </div>
    </div>
  );
};

export default PlayGround;
