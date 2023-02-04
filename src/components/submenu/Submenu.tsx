import React from "react";
import { Link } from "react-router-dom";
import "./SubmenuStyled.css";

interface SubmenuItem {
  link: string;
  label: string;
  labelClassName?: string;
  external?: boolean;
}

const Submenu: React.FC<{
  label: string;
  labelClassName?: string;
  items: SubmenuItem[];
}> = ({ label, items, labelClassName }) => {
  return (
    <nav className="dropdownmenu">
      <ul>
        <li>
          <a href="#" className={labelClassName}>
            {label}
          </a>
          <ul className="submenu">
            {items.map((item) => {
              if (item.external) {
                return (
                  <li>
                    <a
                      href={item.link}
                      target="_blank"
                      className={item.labelClassName}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li>
                  <Link to={item.link} className={item.labelClassName}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Submenu;
