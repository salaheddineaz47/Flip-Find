function Box({ children, width = "" }) {
  return (
    <li
      className={`block font-mono sm:text-xl text-md bg-slate-300 sm:py-2 sm:px-4 py-1 px-3 rounded-lg ${width}`}
    >
      <div className="flex justify-between gap-4 ">{children}</div>
    </li>
  );
}

export default Box;
