import React from "react";

const variants = {
  primary:
    "bg-navy text-white hover:bg-space",
  secondary:
    "border border-line bg-white text-navy hover:border-navy",
  inverse:
    "bg-white text-navy hover:bg-ice",
  ghost:
    "border border-white/25 bg-white/10 text-white hover:bg-white/15",
};

const Button = ({
  text,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {text}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default Button;
