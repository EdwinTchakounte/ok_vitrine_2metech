import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'glass'
  | 'white';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  glass: 'btn-glass',
  white: 'btn-white',
};

const sizeClasses: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

function buildClass(
  variant: Variant = 'primary',
  size: Size = 'md',
  fullWidth?: boolean,
  className?: string,
) {
  return cn(
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    'no-tap',
    className,
  );
}

interface ButtonProps
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  ...rest
}) => {
  return (
    <button className={buildClass(variant, size, fullWidth, className)} {...rest}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
};

interface ButtonLinkProps extends BaseProps {
  to: string;
  external?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  download?: boolean | string;
  onClick?: React.MouseEventHandler;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  external,
  target,
  rel,
  ariaLabel,
  download,
  onClick,
  variant,
  size,
  className,
  fullWidth,
  iconLeft,
  iconRight,
  children,
}) => {
  const cls = buildClass(variant, size, fullWidth, className);
  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (external) {
    return (
      <a
        href={to}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        className={cls}
        aria-label={ariaLabel}
        download={download}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </Link>
  );
};

export default Button;
