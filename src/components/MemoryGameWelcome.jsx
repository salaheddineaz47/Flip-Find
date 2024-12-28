import { useEffect } from "react";
import GameOptionSelect from "./GameOptionSelect";
import Logo from "./Logo";
import ImageSwitcher from "./ImageSwitcher";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MemoryGameWelcome() {
  useEffect(function () {
    toast(
      <>
        - Flip the cards to reveal their hidden sides.
        <br />
        - Find matching pairs to score!
        <br />- The <strong>timer</strong> starts as soon as you begin.
        <br /> - Every 2 cards flipped count as a <strong>move</strong>.
        <br />
        - Win by matching all the cards.
        <br />
        <div className="text-center mt-2">
          <strong>Good luck! 🚀🎉</strong>
        </div>
      </>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
  }, []);
  return (
    <section className="relative overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center min-h-screen w-full ">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <Logo sizeClass="sm:text-5xl text-4xl" />
          <GameOptionSelect />
        </div>
      </div>

      <ImageSwitcher />
    </section>
  );
}

export default MemoryGameWelcome;
