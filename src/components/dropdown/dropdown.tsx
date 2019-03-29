import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

interface ListItem {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
interface Props {
  label: string | JSX.Element;
  list: ListItem[];
}

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  Dropdown.handleClickOutside = () => setOpen(false);
  return (
    <div className="dropdown" onClick={toggle}>
      <button className="toggleButton">{props.label}</button>
      {open && (
        <ul>
          {props.list.map((item, idx) => (
            <li key={idx.toString()}>
              <button onClick={event => item.onClick(event)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .dropdown {
          display: inline-flex;
          position: relative;
        }
        ul {
          position: absolute;
          right: 0;
          top: 0;
          margin: 0;
          padding: 0;
          transition: 0.25s ease all;
          transform-origin: 0 1;
          box-shadow: -2px 0 5px var(--box-shadow-color1);
        }
        li {
          list-style: none;
          background-color: var(--black);
          color: var(--white);
          text-align: center;
          border-bottom: 1px solid var(--white);
          & button {
            background: transparent;
            border: none;
            color: var(--white);
            width: 8em;
          }
        }
      `}</style>
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
