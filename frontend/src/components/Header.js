import React from 'react';
import './Header.css';

function Header(props) {

    return (
        <div id="header">
            <h1 id="title">{props.title}</h1>
        </div>
    );

}

export default Header;
