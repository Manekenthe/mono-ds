import * as React from 'react';

export type AvatarStatus = 'invisible' | 'online' | 'idle' | 'dnd';

const statusColors: Record<AvatarStatus, string> = {
  invisible: '#A0A0A0',
  online: '#22C55E',
  idle: '#E36209',
  dnd: '#EF4444',
};

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: number;
  radius?: number | 'full';
  status?: AvatarStatus;
}

function IconUser({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16,4a5,5,0,1,1-5,5,5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,16,2Z" />
      <path d="M26,30H24V25a5,5,0,0,0-5-5H13a5,5,0,0,0-5,5v5H6V25a7,7,0,0,1,7-7h6a7,7,0,0,1,7,7Z" />
    </svg>
  );
}

export function Avatar({ src, alt = '', fallback, size = 32, radius = 'full', status }: AvatarProps) {
  const [failed, setFailed] = React.useState(false);
  const showImage = !!src && !failed;
  const r = radius === 'full' ? 9999 : radius;

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: r,
        boxShadow: '0 0 0 0.75px #121212',
      }}
    >
      <span
        className="font-mono font-medium"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: r,
          background: '#1A1A1A',
          color: '#FFFFFF',
          fontSize: (size * 14) / 32,
          lineHeight: `${(size * 16) / 32}px`,
        }}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : fallback ? (
          fallback
        ) : (
          <IconUser size={size / 2} />
        )}
      </span>

      {/* 1.5px ring, centered on the edge (0.75px outside + 0.75px inside) */}
      <span
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, borderRadius: r, boxShadow: 'inset 0 0 0 0.75px #121212', pointerEvents: 'none' }}
      />

      {status && (
        <span
          role="status"
          aria-label={status}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 10,
            height: 10,
            borderRadius: 9999,
            background: statusColors[status],
            boxShadow: '0 0 0 0.5px #121212, inset 0 0 0 0.5px #121212',
          }}
        />
      )}
    </span>
  );
}

export function AvatarGroup({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      {items.map((child, i) => (
        <div key={i} style={{ display: 'flex', marginLeft: i === 0 ? 0 : -8 }}>
          {child}
        </div>
      ))}
    </div>
  );
}
