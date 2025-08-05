import { BaseComponentProps } from "@/types/component";
import Logo from "./logo-root";
import { twMerge } from "tailwind-merge";

export default function Header({ className }: BaseComponentProps) {
  return (
    <header
      className={twMerge(
        "w-[calc(100%-40px)] md:max-w-[600px] lg:max-w-[920px] m-auto flex items-center justify-between",
        className
      )}
    >
      <Logo className="text-white" size={40} />
      <span className="text-gray-200 whitespace-nowrap block">
        /privacy policy
      </span>
    </header>
  );
}
