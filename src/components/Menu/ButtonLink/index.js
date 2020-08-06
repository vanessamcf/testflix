/* eslint-disable react/destructuring-assignment */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React from 'react';

function ButtonLink(props) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;