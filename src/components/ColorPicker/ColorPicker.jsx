import { useState } from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionInd, setActiveOptionInd] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionInd ? styles.activeOption : styles.option;
  };
  const { label } = options[activeOptionInd];
  return (
    <div>
      <h2>Color Picker</h2>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            className={makeOptionClassName(index)}
            onClick={() => setActiveOptionInd(index)}
            key={label}
            style={{
              backgroundColor: color,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
