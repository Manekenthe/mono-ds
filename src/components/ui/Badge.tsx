import * as React from 'react';

export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'info' | 'warning';
export type BadgeSize = 'sm' | 'md' | 'lg';

type Look = { bg: string; color: string; stroke?: string };

const solid: Record<BadgeVariant, Look> = {
  default:     { bg: '#FFFFFF', color: '#121212' },
  secondary:   { bg: '#2A2A2A', color: '#FFFFFF' },
  outline:     { bg: '#1A1A1A', color: '#FFFFFF', stroke: '#2A2A2A' },
  destructive: { bg: '#EF4444', color: '#FFFFFF' },
  success:     { bg: '#22C55E', color: '#FFFFFF' },
  info:        { bg: '#0071FC', color: '#FFFFFF' },
  warning:     { bg: '#E36209', color: '#FFFFFF' },
};

// 5% of the status color over #121212, with a 1px stroke in the status color
const light: Partial<Record<BadgeVariant, Look>> = {
  destructive: { bg: '#1D1515', color: '#EF4444', stroke: '#EF4444' },
  success:     { bg: '#131B16', color: '#22C55E', stroke: '#22C55E' },
  info:        { bg: '#11171E', color: '#0071FC', stroke: '#0071FC' },
  warning:     { bg: '#1C1612', color: '#E36209', stroke: '#E36209' },
};

const sizes: Record<BadgeSize, { padX: number; fontSize: number; lineHeight: number }> = {
  sm: { padX: 4,  fontSize: 10, lineHeight: 14 },
  md: { padX: 8,  fontSize: 12, lineHeight: 16 },
  lg: { padX: 12, fontSize: 14, lineHeight: 20 },
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  light?: boolean;
  size?: BadgeSize;
  pill?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function Badge({
  variant = 'default',
  light: useLight = false,
  size = 'md',
  pill = false,
  leadingIcon,
  trailingIcon,
  children,
  style,
  ...props
}: BadgeProps) {
  const look = (useLight && light[variant]) || solid[variant];
  const s = sizes[size];
  const height = s.lineHeight + 4;
  // a single character in a pill becomes a circle (counts, e.g. "7")
  const single =
    pill && typeof children === 'string' && Array.from(children).length === 1 && !leadingIcon && !trailingIcon;

  return (
    <span
      className="font-mono font-medium"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: leadingIcon || trailingIcon ? 4 : 0,
        background: look.bg,
        color: look.color,
        borderRadius: pill ? 9999 : 4,
        padding: single ? '2px 0' : `2px ${s.padX}px`,
        minWidth: single ? height : undefined,
        fontSize: s.fontSize,
        lineHeight: `${s.lineHeight}px`,
        whiteSpace: 'nowrap',
        // 1px stroke centered on the edge (0.5px outside + 0.5px inside)
        boxShadow: look.stroke ? `0 0 0 0.5px ${look.stroke}, inset 0 0 0 0.5px ${look.stroke}` : undefined,
        ...style,
      }}
      {...props}
    >
      {leadingIcon && <span style={{ display: 'flex', flexShrink: 0 }}>{leadingIcon}</span>}
      {children}
      {trailingIcon && <span style={{ display: 'flex', flexShrink: 0 }}>{trailingIcon}</span>}
    </span>
  );
}
