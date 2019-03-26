import React, { useState } from 'react';
import { Card } from '../card/card';

interface Props {
  label: string;
  list: Card[];
  onClick: () => void;
}

const Dropdown = (props: Props) => {
  const [open, toggle] = useState(false);
  return (
    <div className="dropdown">
      <style jsx>{`
        li {
          list-style: none;
        }
      `}</style>
      <button
        onClick={e =>
          toggle(currentState => {
            // e.preventDefault();
            return !currentState;
          })
        }
      >
        {props.label}
      </button>
      {open && (
        <ul>
          {props.list.map((item, key) => (
            <li key={key.toString()}>
              <button>{item.title}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
