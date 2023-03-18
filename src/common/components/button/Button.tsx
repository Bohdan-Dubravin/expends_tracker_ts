interface ButtonProps {
  children: any;
  click: () => void;
}

const Button = ({ click, children }: ButtonProps) => {
  return (
    <button
      className="inline-block group hover:bg-orange2 transition-all duration-[550ms] ease-out  overflow-hidden rounded-lg bg-black1 text-lg shadow-lg px-4 py-2"
      onClick={() => click()}
    >
      <span className="relative text-orange3 group-hover:text-gray-700  text-lg">
        {children}
      </span>
    </button>
  );
};

export default Button;
