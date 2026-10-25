import * as React from 'react';
import { Avatar, AvatarGroup } from '../ui/Avatar';

const WOMAN = '/avatars/avatar-woman.jpg';
const GLASSES = '/avatars/avatar-glasses.jpg';
const SUIT = '/avatars/avatar-suit.jpg';

// 1. Basic
export function AvatarBasic() {
  return <Avatar src={WOMAN} alt="Profile photo" />;
}

// 2. Fallback
export function AvatarFallback() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Avatar fallback="MF" />
      <Avatar />
    </div>
  );
}

// 3. Sizes
export function AvatarSizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Avatar src={WOMAN} size={24} />
      <Avatar src={WOMAN} size={32} />
      <Avatar src={WOMAN} size={36} />
      <Avatar src={WOMAN} size={40} />
    </div>
  );
}

// 4. Radius
export function AvatarRadius() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Avatar src={WOMAN} radius={8} />
      <Avatar src={WOMAN} radius={12} />
      <Avatar src={WOMAN} radius="full" />
    </div>
  );
}

// 5. Badge
export function AvatarBadge() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Avatar src={WOMAN} status="invisible" />
      <Avatar src={WOMAN} status="online" />
      <Avatar src={WOMAN} status="idle" />
      <Avatar src={WOMAN} status="dnd" />
    </div>
  );
}

// 6. Avatar group
export function AvatarGroupBasic() {
  return (
    <AvatarGroup>
      <Avatar src={SUIT} />
      <Avatar src={WOMAN} />
      <Avatar src={GLASSES} />
    </AvatarGroup>
  );
}

// 7. Avatar group with count
export function AvatarGroupCount() {
  return (
    <AvatarGroup>
      <Avatar src={SUIT} />
      <Avatar src={WOMAN} />
      <Avatar src={GLASSES} />
      <Avatar fallback="+3" />
    </AvatarGroup>
  );
}
