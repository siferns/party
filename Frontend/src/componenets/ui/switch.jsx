
import { useState } from "react";

export function Switch({ checked = false, onChange }) {
  const [on, setOn] = useState(checked);
  const toggle = () => {
    setOn(!on);
    onChange?.(!on);
  };

  return (
    <div
      role="switch"
      aria-checked={on}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={e => e.key === 'Enter' && toggle()}
      className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer ${
        on ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform ${
          on ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </div>
  );
}
