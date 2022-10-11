import React from 'react';

function Header(props) {
    return (
        <>
            <nav>
                <div className="nav-wrapper blue-grey lighten-3">
                    <a href="#" className="brand-logo center">Movies</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="#">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;