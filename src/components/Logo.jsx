function Logo({ sizeClass = "sm:text-4xl text-3xl" }) {
  return (
    <h2
      className={`${sizeClass} margin font-extrabold text-center  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-400`}
    >
      <span className="animate-pulse">Flip</span> <span>& </span>
      <span className="animate-pulse delay-100">Find</span>
    </h2>
  );
}

export default Logo;
