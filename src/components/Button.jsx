function Button({
  children,
  // className = "bg-purple-500 hover:bg-purple-600  text-white",
  className = "bg-slate-300 hover:bg-green-600 hover:text-slate-50 text-slate-600",
  onClick = () => {
    return;
  },
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md  sm:px-3 sm:py-2  py-1 px-2  text-center sm:text-base font-medium transition ${className} `}
    >
      {children}
    </button>
  );
}

export default Button;
