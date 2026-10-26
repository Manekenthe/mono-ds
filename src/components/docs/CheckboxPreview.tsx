import * as React from 'react';
import { Checkbox } from '../ui/Checkbox';

// 1. Basic
export function CheckboxBasic() {
  return <Checkbox>Basic checkbox</Checkbox>;
}

// 2. With description
export function CheckboxWithDescription() {
  return <Checkbox description="Receive important alerts and updates.">Enable notifications</Checkbox>;
}

// 3. Disabled
export function CheckboxDisabled() {
  return (
    <Checkbox disabled defaultChecked>
      Disabled checkbox
    </Checkbox>
  );
}

// 4. Circle
export function CheckboxCircle() {
  return <Checkbox circle>Circle checkbox</Checkbox>;
}

// 5. Card (fills its container, here 348px wide)
export function CheckboxCard() {
  return (
    <div style={{ width: 348, maxWidth: '100%' }}>
      <Checkbox card description="Receive important alerts and updates.">
        Enable notifications
      </Checkbox>
    </div>
  );
}
