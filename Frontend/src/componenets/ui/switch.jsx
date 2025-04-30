import { useState } from 'react';
export function Switch({ checked = false, onChange }) {
  const [on, setOn] = useState(checked);
  return (
    <button
      onClick={() => { setOn(!on); onChange?.(!on); }}
      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
        on ? 'bg-blue-600' : 'bg-gray-300'
      } transition`}
    >
      <span
        className={`inline-block h-4 w-4 transform bg-white rounded-full transition ${
          on ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}