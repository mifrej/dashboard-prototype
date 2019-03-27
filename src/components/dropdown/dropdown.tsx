import React, { useState } from 'react';

interface ListItem {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
interface Props {
  label: string;
  list: ListItem[];
}

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <style jsx>{`
        li {
          list-style: none;
        }
      `}</style>
      <button
        onClick={e =>
          setOpen(currentState => {
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
              <button onClick={event => item.onClick(event)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
