import { styles } from "./IconButton.css";
import { ButtonHTMLAttributes, forwardRef, HTMLProps, ReactNode } from "react";

type IconButtonSize = "small" | "medium" | "large";
type IconButtonVariant = "contained" | "outlined" | "ghost";
type IconButtonColor = "primary" | "success" | "warning" | "error";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  color?: IconButtonColor;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = "contained",
      size = "medium",
      color = "primary",
      ...props
    }: IconButtonProps,
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={styles({
          variant: variant,
          color: color,
          size: size,
        })}
      >
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
export default IconButton;
