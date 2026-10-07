import * as React from 'react';

function IconCommand() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M24,13a4,4,0,0,0,4-4V8a4,4,0,0,0-4-4H23a4,4,0,0,0-4,4v3H13V8A4,4,0,0,0,9,4H8A4,4,0,0,0,4,8V9a4,4,0,0,0,4,4h3v6H8a4,4,0,0,0-4,4v1a4,4,0,0,0,4,4H9a4,4,0,0,0,4-4V21h6v3a4,4,0,0,0,4,4h1a4,4,0,0,0,4-4V23a4,4,0,0,0-4-4H21V13ZM21,8a2,2,0,0,1,2-2h1a2,2,0,0,1,2,2V9a2,2,0,0,1-2,2H21ZM8,11A2,2,0,0,1,6,9V8A2,2,0,0,1,8,6H9a2,2,0,0,1,2,2v3H8Zm3,13a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V23a2,2,0,0,1,2-2h3Zm8-5H13V13h6Zm2,2h3a2,2,0,0,1,2,2v1a2,2,0,0,1-2,2H23a2,2,0,0,1-2-2Z"/>
    </svg>
  );
}

export type ButtonVariant =
  | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  | 'info' | 'success' | 'warning' | 'destructive' | 'disabled';

export type ButtonSize = 'sm' | 'default' | 'lg';

const variantStyles: Record<ButtonVariant, { bg: string; bgHover: string; color: string; border?: string }> = {
  primary:     { bg: '#FFFFFF', bgHover: '#DFDFDF', color: '#121212' },
  secondary:   { bg: '#2A2A2A', bgHover: '#252525', color: '#FFFFFF' },
  outline:     { bg: '#121212', bgHover: '#2A2A2A', color: '#FFFFFF', border: '#2A2A2A' },
  ghost:       { bg: 'transparent', bgHover: '#2A2A2A', color: '#FFFFFF' },
  link:        { bg: 'transparent', bgHover: 'transparent', color: '#FFFFFF' },
  info:        { bg: '#0071FC', bgHover: '#0062DC', color: '#FFFFFF' },
  success:     { bg: '#22C55E', bgHover: '#1DB052', color: '#FFFFFF' },
  warning:     { bg: '#E36209', bgHover: '#C65608', color: '#FFFFFF' },
  destructive: { bg: '#EF4444', bgHover: '#D03B3B', color: '#FFFFFF' },
  disabled:    { bg: '#A0A0A0', bgHover: '#A0A0A0', color: '#121212' },
};

const sizeStyles: Record<ButtonSize, { padX: string; padY: string; fontSize: string; lineHeight: string }> = {
  sm:      { padX: '12px', padY: '8px',  fontSize: '12px', lineHeight: '16px' },
  default: { padX: '16px', padY: '8px',  fontSize: '14px', lineHeight: '20px' },
  lg:      { padX: '20px', padY: '10px', fontSize: '16px', lineHeight: '24px' },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  iconOnly?: React.ReactNode;
  underlineOnHover?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  iconOnly,
  underlineOnHover,
  disabled,
  style,
  children,
  ...props
}: ButtonProps) {
  const v = variantStyles[disabled ? 'disabled' : variant];
  const s = sizeStyles[size];
  const [hover, setHover] = React.useState(false);

  const isIconOnly = !!iconOnly;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="font-mono font-medium"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: (leadingIcon || trailingIcon) ? '8px' : '0',
        background: hover && !disabled ? v.bgHover : v.bg,
        color: v.color,
        border: v.border ? `1px solid ${v.border}` : 'none',
        borderRadius: '8px',
        padding: isIconOnly ? '8px' : `${s.padY} ${s.padX}`,
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        cursor: disabled ? 'not-allowed' : 'pointer',
        textDecoration: variant === 'link' && hover && underlineOnHover !== false ? 'underline' : 'none',
        textUnderlineOffset: '4px',
        ...style,
      }}
      {...props}
    >
      {isIconOnly ? iconOnly : (
        <>
          {leadingIcon}
          {children}
          {trailingIcon}
        </>
      )}
    </button>
  );
}

// 1. Primary
export function ButtonPrimary() {
  return <Button variant="primary">Button</Button>;
}

// 2. Secondary
export function ButtonSecondary() {
  return <Button variant="secondary">Button</Button>;
}

// 3. Outline
export function ButtonOutline() {
  return <Button variant="outline">Button</Button>;
}

// 4. Ghost
export function ButtonGhost() {
  return <Button variant="ghost">Button</Button>;
}

// 5. Link
export function ButtonLink() {
  return <Button variant="link" underlineOnHover>Button</Button>;
}

// 6. Info
export function ButtonInfo() {
  return <Button variant="info">Button</Button>;
}

// 7. Success
export function ButtonSuccess() {
  return <Button variant="success">Button</Button>;
}

// 8. Warning
export function ButtonWarning() {
  return <Button variant="warning">Button</Button>;
}

// 9. Destructive
export function ButtonDestructive() {
  return <Button variant="destructive">Button</Button>;
}

// 10. With Leading Icon
export function ButtonLeadingIcon() {
  return <Button variant="primary" leadingIcon={<IconCommand />}>Button</Button>;
}

// 11. With Trailing Icon
export function ButtonTrailingIcon() {
  return <Button variant="primary" trailingIcon={<IconCommand />}>Button</Button>;
}

// 12. Icon Only
export function ButtonIconOnly() {
  return <Button variant="primary" iconOnly={<IconCommand />} aria-label="Command" />;
}

// 13. Disabled
export function ButtonDisabled() {
  return <Button disabled>Button</Button>;
}

// 14. Sizes
export function ButtonSizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Button variant="primary" size="sm">Button</Button>
      <Button variant="primary" size="default">Button</Button>
      <Button variant="primary" size="lg">Button</Button>
    </div>
  );
}
