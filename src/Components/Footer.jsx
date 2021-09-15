import React from "react";

const Footer = () => {
    return (
        <footer className="footer fs-5 text-center bg-gray">
            <span className="text-white">
                <a href="https://github.com/ulysses-ck" className="link-light">
                    ulysses ck
                </a>
                - &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
};

export default Footer;
