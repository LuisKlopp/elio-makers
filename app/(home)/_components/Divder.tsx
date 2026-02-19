interface DividerProps {
  className?: string;
}

export const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div className={`bg-primaryBackColor mb-6 h-0.75 w-12 ${className}`} />
  );
};
