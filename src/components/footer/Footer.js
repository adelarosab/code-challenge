import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      By adrian.delarosab
      <Link to="/add">
        <button className="footer__action">+<span>Add</span></button>
      </Link>
    </footer>
  );
}
