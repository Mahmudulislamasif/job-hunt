import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  ["border-[2px]","border-[#ffffff40]","rounded-lg","px-3","py-2","gap-2","transition-all","duration-500"],
  {
    variants: {
      variant: { 
        default: ["bg-transparent", "hover:bg-red","flex","items-center","justify-center"],
        primary:["bg-secondary","hover:bg-white","flex","items-center","justify-center","w-full","border-0","hover:text-black"],
        hover: ["hover:bg-green-200"],
        dark: ["bg-green-900", "hover:bg-slate-800", "text-white"],
        gradient: [
          "bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500",
        ],
        hoverBorder: ["hover:border-4", "rounded-full", "p-2", "border-black"],
        border: [
          "border-4",
          "rounded-full",
          "p-2",
          "border-black",
          "hover:bg-gradient-to-br",
          "hover:from-indigo-500",
          "hover:via-purple-500",
          "hover:to-pink-500",
        ],
      },
      size: {
        default: [""],
        button: ["rounded", "h-10", "w-32"],
        icon: ["rounded-full", "w-20", "h-20", "p-2.5"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonType = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

const Button = ({ variant, size, className, ...props }: ButtonType) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
