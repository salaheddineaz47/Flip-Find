import { useMemoryGame } from "./MemoryGameProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ id, img, isFlipped }) => {
  const { onCardClick } = useMemoryGame();

  const isJokerCards = img.includes("joker");

  return (
    <div
      className={`relative cursor-pointer transition-transform duration-500 transform-style-preserve-3d
        ${isFlipped ? "rotate-y-180" : ""}
        w-full h-full`}
      onClick={() => onCardClick(id)}
    >
      {/* Front of the card */}
      <div
        className={`absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center 
          transition-all duration-500 
          ${isFlipped ? "opacity-0 z-0" : "opacity-100 z-10"}
          transform ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* <LazyLoadImage
          src={`assets/cards imgs/${
            isJokerCards
              ? "joker/joker-back-side.png"
              : "pokemon/Pokemon_Pokeball.png"
          }`}
          alt={isJokerCards ? "joker card back side" : "Pokemon Pokeball"}
          className={`w-full h-full ${
            isJokerCards ? "scale-y-75" : "scale-75"
          }`}
          effect="blur"
        /> */}
        <img
          src={`assets/cards imgs/${
            isJokerCards
              ? "joker/joker-back-side.png"
              : "pokemon/Pokemon_Pokeball.png"
          }`}
          alt={isJokerCards ? "joker card back side" : "Pokemon Pokeball"}
          className={`w-full h-full ${isJokerCards ? "" : "scale-75"}`}
        />
      </div>

      {/* Back of the card */}
      <div
        className={`absolute inset-0 bg-white rounded-lg flex items-center justify-center 
          transition-all duration-500  
          ${isFlipped ? "opacity-100 z-10" : "opacity-0 z-0"}
          transform ${isFlipped ? "rotate-y-0" : "rotate-y-180"} ${
          isJokerCards ? "" : ""
        }`}
      >
        {/* <LazyLoadImage src={img} className={`h-full w-full`} effect="blur" /> */}
        <img src={img} className={`h-full w-full`} />
      </div>
    </div>
  );
};

export default Card;
