import { useState, useEffect } from "react";

const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState("joker");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev === "joker" ? "pokemon" : "joker"));
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const imageSrc =
    currentImage === "joker"
      ? "src/assets/bgJokerCards.jpg"
      : "src/assets/bgPokemonCards.jpg";

  const altText =
    currentImage === "joker"
      ? "Background image of Joker cards"
      : "Background image of Pokemon cards";

  return (
    <img
      alt={altText}
      src={imageSrc}
      className={`h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] transition-all duration-500 ease-in-out ${
        isTransitioning ? "opacity-60 blur-sm" : "opacity-100 blur-0"
      }`}
    />
  );
};

export default ImageSwitcher;
