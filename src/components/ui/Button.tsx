import { Link } from "react-router-dom";
import { cn } from "@/utils/helpers";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-dark";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    "outline-dark": "btn-outline-dark",
  };

  const classes = cn(variantClasses[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
