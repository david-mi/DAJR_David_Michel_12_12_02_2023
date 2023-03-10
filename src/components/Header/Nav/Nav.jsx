import React from 'react';
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { NavPropTypes } from "./propTypes";

/**
 * @typedef Links
 * @type {Object}
 * @property {string} route 
 * @property {string} name
 */

/**
 * Create a Nav component which display naviation links
 * 
 * @param {Object} props
 * @param {Links[]} props.links 
 */

const Nav = ({ links }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ route, name }) => (
          <li key={name}>
            <Link to={route}>{name}</Link>
          </li>
        )
        )}
      </ul>
    </nav>
  );
};

Nav.propTypes = NavPropTypes;

export default Nav;