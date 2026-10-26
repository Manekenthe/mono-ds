import * as React from 'react';
import { cn } from '../../lib/utils';

function IconCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M6.5 12L2 7.5L2.707 6.793L6.5 10.5855L13.293 3.793L14 4.5L6.5 12Z" />
    </svg>
  );
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  description?: string;
  circle?: boolean;
  card?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const STROKE = '#2A2A2A';

export function Checkbox({
  children,
  description,
  circle = false,
  card = false,
  checked,
  defaultChecked = false,
  disabled,
  onChange,
  onCheckedChange,
  className,
  style,
  ...props
}: CheckboxProps) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const [hover, setHover] = React.useState(false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? !!checked : internal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.checked);
    onCheckedChange?.(e.target.checked);
    onChange?.(e);
  };

  // 16x16 box. The 1px stroke sits centered on the edge (0.5px outside, 0.5px inside).
  const box: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 16,
    height: 16,
    marginTop: 2,
    borderRadius: circle ? 9999 : 4,
    background: isChecked ? (disabled ? '#A0A0A0' : '#DFDFDF') : '#1A1A1A',
    color: '#1A1A1A',
    boxShadow: isChecked ? undefined : `0 0 0 0.5px ${STROKE}, inset 0 0 0 0.5px ${STROKE}`,
    opacity: disabled && !isChecked ? 0.5 : 1,
    transition: 'background-color 150ms',
  };

  const cardStyle: React.CSSProperties = card
    ? {
        width: '100%',
        padding: 16,
        borderRadius: 12,
        background: hover || isChecked ? '#1A1A1A' : '#121212',
        // 1px stroke centered on the edge
        boxShadow: (() => {
          const c = isChecked ? '#A0A0A0' : STROKE;
          return `0 0 0 0.5px ${c}, inset 0 0 0 0.5px ${c}`;
        })(),
        transition: 'background-color 150ms, box-shadow 150ms',
      }
    : {};

  return (
    <label
      className={cn(
        'font-mono',
        card && 'has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#0071FC]',
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: card ? 'flex' : 'inline-flex',
        alignItems: 'flex-start',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...cardStyle,
        ...style,
      }}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <span
        aria-hidden="true"
        className={cn(
          !card &&
            'peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#0071FC]'
        )}
        style={box}
      >
        {isChecked && <IconCheck />}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span
          style={{
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            color: disabled ? '#A0A0A0' : '#FFFFFF',
          }}
        >
          {children}
        </span>
        {description && (
          <span style={{ fontSize: 12, lineHeight: '16px', fontWeight: 500, color: '#A0A0A0' }}>{description}</span>
        )}
      </span>
    </label>
  );
}
