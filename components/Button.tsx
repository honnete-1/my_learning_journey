import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-secondary-dark",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props;

  const base =
    "inline-block rounded-lg px-6 py-3 font-semibold transition-colors duration-200 shadow-sm";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href, variant: _v, children: _c, className: _cl, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
