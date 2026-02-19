import { cn } from "@/lib/utils";

import { Divider } from "./Divder";

interface SectionTitleProps {
  title: string;
  description: string;
  isDarkMode?: boolean;
}

export const SectionTitle = ({
  title,
  description,
  isDarkMode,
}: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <Divider className="mx-auto" />
      <h2
        className={cn(
          "text-4xl font-bold text-black md:text-5xl",
          isDarkMode && "text-white"
        )}
      >
        {title}
      </h2>
      <p
        className={cn("text-gray-7 mt-4 text-lg", isDarkMode && "text-gray-3")}
      >
        {description}
      </p>
    </div>
  );
};
