import React, { ChangeEventHandler } from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div style={{ width: '75px', textAlign: 'end' }}>
        {left} | {right}
      </div>
    </div>
  );
};

export default TrackProgress;
