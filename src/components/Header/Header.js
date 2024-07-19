/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (id === 'intro') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      if (element) {
        element?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <nav className="navbar">
      <ul className="navbar_list">
        <li
          className="navbar_list_item underline_animation"
          onClick={(e) => handleClick(e, 'intro')}
        >
          <a className="navbar_list_item_link" href="#">
            <span className="navbar_number">01.</span>Home
          </a>
        </li>
        <li
          className="navbar_list_item underline_animation"
          onClick={(e) => handleClick(e, 'about-me')}
        >
          <a className="navbar_list_item_link" href="#">
            <span className="navbar_number">02.</span>About
          </a>
        </li>
        <li
          className="navbar_list_item underline_animation"
          onClick={(e) => handleClick(e, 'education')}
        >
          <a className="navbar_list_item_link" href="#">
            <span className="navbar_number">03.</span>Education
          </a>
        </li>
        <li
          className="navbar_list_item underline_animation"
          onClick={(e) => handleClick(e, 'my-work')}
        >
          <a className="navbar_list_item_link" href="#">
            <span className="navbar_number">04.</span>Work
          </a>
        </li>
        <li
          onClick={(e) => handleClick(e, 'contact-me')}
          className="navbar_list_item underline_animation"
        >
          <a className="navbar_list_item_link" href="#">
            <span className="navbar_number">05.</span>Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
