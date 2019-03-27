import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

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
  const toggle = () => setOpen(!open);

  Dropdown.handleClickOutside = () => setOpen(false);
  return (
    <div className="dropdown">
      <button onClick={toggle}>{props.label}</button>
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
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
      `}</style>
    </div>
  );
};



const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
