import React from "react";

const variants = {
  primary: "bg-navy text-white hover:bg-space",
  secondary: "border border-line bg-white text-navy hover:border-navy",
  inverse: "bg-white text-navy hover:bg-ice",
  ghost: "border border-white/25 bg-white/10 text-white hover:bg-white/15",
};

const Button = ({
  text,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium outline-none transition duration-150 hover:-translate-y-0.5 focus-visible:shadow-focus active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:translate-y-0 disabled:scale-100 disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={`${classes}${disabled ? " pointer-events-none opacity-50" : ""}`}
        aria-disabled={disabled || undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
