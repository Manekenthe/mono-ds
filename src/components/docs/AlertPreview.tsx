import * as React from 'react';

function IconCommand({ color = '#A0A0A0' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M24,13a4,4,0,0,0,4-4V8a4,4,0,0,0-4-4H23a4,4,0,0,0-4,4v3H13V8A4,4,0,0,0,9,4H8A4,4,0,0,0,4,8V9a4,4,0,0,0,4,4h3v6H8a4,4,0,0,0-4,4v1a4,4,0,0,0,4,4H9a4,4,0,0,0,4-4V21h6v3a4,4,0,0,0,4,4h1a4,4,0,0,0,4-4V23a4,4,0,0,0-4-4H21V13ZM21,8a2,2,0,0,1,2-2h1a2,2,0,0,1,2,2V9a2,2,0,0,1-2,2H21ZM8,11A2,2,0,0,1,6,9V8A2,2,0,0,1,8,6H9a2,2,0,0,1,2,2v3H8Zm3,13a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V23a2,2,0,0,1,2-2h3Zm8-5H13V13h6Zm2,2h3a2,2,0,0,1,2,2v1a2,2,0,0,1-2,2H23a2,2,0,0,1-2-2Z"/></svg>;
}
function IconInformation({ color = '#0071FC' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><polygon points="17 22 17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22"/><path d="M16,8a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,8Z"/><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"/></svg>;
}
function IconCheckmark({ color = '#22C55E' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"/><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/></svg>;
}
function IconWarning({ color = '#E36209' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><rect x="15" y="8" width="2" height="11"/><path d="M16,22a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,22Z"/></svg>;
}
function IconClose({ color = '#EF4444' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4s12,5.4,12,12S22.6,28,16,28z"/><polygon points="21.4,23 16,17.6 10.6,23 9,21.4 14.4,16 9,10.6 10.6,9 16,14.4 21.4,9 23,10.6 17.6,16 23,21.4"/></svg>;
}
function IconCloseLarge() {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><polygon points="17.4141 16 26 7.4141 24.5859 6 16 14.5859 7.4143 6 6 7.4141 14.5859 16 6 24.5859 7.4143 26 16 17.4141 24.5859 26 26 24.5859 17.4141 16"/></svg>;
}

interface AlertProps {
  tone?: 'default' | 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
  title: string;
  description?: string;
  list?: string[];
  closable?: boolean;
  actions?: boolean;
}

const toneStyles: Record<string, { bg: string; border: string }> = {
  default: { bg: '#1A1A1A', border: '#2A2A2A' },
  info:    { bg: '#11171E', border: '#0071FC' },
  success: { bg: '#131B16', border: '#22C55E' },
  warning: { bg: '#1C1612', border: '#E36209' },
  error:   { bg: '#1D1515', border: '#EF4444' },
};

export function Alert({ tone = 'default', icon, title, description, list, closable, actions }: AlertProps) {
  const [visible, setVisible] = React.useState(true);
  const style = toneStyles[tone];
  if (!visible) return null;

  return (
    <div style={{
      background: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: '12px',
      padding: '16px',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: icon ? '8px' : '0' }}>
        {icon && <span style={{ display: 'flex', flexShrink: 0 }}>{icon}</span>}
        <span className="font-mono font-medium" style={{ fontSize: '14px', lineHeight: '20px', color: '#FFFFFF' }}>{title}</span>
        {closable && (
          <button
            onClick={() => setVisible(false)}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#FFFFFF', display: 'flex', flexShrink: 0 }}
            aria-label="Close"
          >
            <IconCloseLarge />
          </button>
        )}
      </div>
      {description && (
        <p className="font-mono font-medium" style={{ fontSize: '12px', lineHeight: '20px', color: '#A0A0A0', marginTop: '4px', paddingLeft: icon ? '24px' : '0' }}>
          {description}
        </p>
      )}
      {list && (
        <ul className="font-mono font-medium" style={{ fontSize: '12px', lineHeight: '20px', color: '#A0A0A0', marginTop: '4px', paddingLeft: icon ? '40px' : '16px', listStyle: 'disc' }}>
          {list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {actions && (
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', paddingLeft: icon ? '24px' : '0' }}>
          <button className="font-mono font-medium" style={{ background: '#FFFFFF', color: '#121212', borderRadius: '4px', padding: '2px 8px', fontSize: '12px', lineHeight: '20px', border: 'none', cursor: 'pointer' }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#DFDFDF')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#FFFFFF')}
          >Accept</button>
          <button className="font-mono font-medium" style={{ background: 'transparent', color: '#FFFFFF', borderRadius: '4px', padding: '2px 8px', fontSize: '12px', lineHeight: '20px', border: 'none', cursor: 'pointer' }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#2A2A2A')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >Dismiss</button>
        </div>
      )}
    </div>
  );
}

// 1. Default preview (title + description, no icon)
export function AlertDefault() {
  return <Alert title="Changes saved" description="Your profile settings have been updated successfully." />;
}

// 2. With Icon
export function AlertWithIcon() {
  return <Alert icon={<IconCommand />} title="Keyboard shortcut updated" description="Command + K now opens the quick search." />;
}

// 3. Information
export function AlertInformation() {
  return <Alert tone="info" icon={<IconInformation />} title="New version available" description="Mono DS 1.2 includes new components and bug fixes." />;
}

// 4. Success
export function AlertSuccess() {
  return <Alert tone="success" icon={<IconCheckmark />} title="Deployment successful" description="Your changes are now live on production." />;
}

// 5. Warning
export function AlertWarning() {
  return <Alert tone="warning" icon={<IconWarning />} title="Approaching usage limit" description="You have used 90% of your monthly API quota." />;
}

// 6. Error
export function AlertError() {
  return <Alert tone="error" icon={<IconClose />} title="Payment failed" description="We could not process your card. Please update your billing details." />;
}

// 7. With Close Button
export function AlertWithClose() {
  return <Alert icon={<IconCommand />} title="Tip of the day" description="Press Cmd+Shift+P to open the command palette." closable />;
}

// 8. Title Only
export function AlertTitleOnly() {
  return <Alert tone="success" icon={<IconCheckmark />} title="All systems operational" />;
}

// 9. With List
export function AlertWithList() {
  return (
    <Alert
      tone="error"
      icon={<IconClose />}
      title="Form submission failed"
      list={['Email address is required', 'Password must be at least 8 characters', 'You must accept the terms of service']}
    />
  );
}

// 10. With Action
export function AlertWithAction() {
  return <Alert icon={<IconCommand />} title="Update available" description="A new version of the CLI is ready to install." actions />;
}
