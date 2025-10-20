interface buttonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: buttonProps) => {
  return (
    <button
      className={`px-[19px] py-2 rounded-3xl duration-300 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
