import * as React from 'react';

function IconCommand({ color = '#A0A0A0' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M23,18a5,5,0,0,0-5,5v4a5,5,0,1,0,5-5H9a5,5,0,1,0,5,5V23A5,5,0,0,0,9,18H23a5,5,0,0,0,5-5A5,5,0,0,0,23,8V9a5,5,0,1,0,5,5H9A5,5,0,1,0,9,9v4A5,5,0,0,0,9,18Zm0,2a3,3,0,1,1-3,3V20Zm-9-5a3,3,0,1,1,3-3v3Zm0-8a3,3,0,1,1-3,3V7Zm9,5a3,3,0,1,1-3-3h3Z"/></svg>;
}
function IconInformation({ color = '#0071FC' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><circle cx="16" cy="8" r="1.5"/><path d="M17,13H13v2h2v7H13v2h8v-2H17V13Z"/></svg>;
}
function IconCheckmark({ color = '#22C55E' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M14,21.414,9.293,16.707l1.414-1.414L14,18.586,21.293,11.293l1.414,1.414Z"/><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/></svg>;
}
function IconWarning({ color = '#E36209' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><rect x="15" y="8" width="2" height="12"/><circle cx="16" cy="23" r="1.5"/></svg>;
}
function IconClose({ color = '#EF4444' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><polygon points="21.4 11.4 20 10 16 14 12 10 10.6 11.4 14.6 15.4 10.6 19.4 12 20.8 16 16.8 20 20.8 21.4 19.4 17.4 15.4 21.4 11.4"/></svg>;
}
function IconCloseLarge() {
  return <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><polygon points="24.6,9.4 23.4,8.2 16,15.6 8.6,8.2 7.4,9.4 14.8,16.8 7.4,24.2 8.6,25.4 16,18 23.4,25.4 24.6,24.2 17.2,16.8"/></svg>;
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
