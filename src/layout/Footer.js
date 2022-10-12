import React from 'react';

function Footer() {
    return (
        <>
            <footer className="page-footer  blue-grey darken-2" >
                    <div className="container">
                        {new Date().getFullYear()} Movies App
                        <a className="grey-text text-lighten-4 right" href="#">More Links</a>
                    </div>
            </footer>
        </>
    );
}

export default Footer;


