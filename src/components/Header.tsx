import React from "react";
import "../assets/styles/components/Header.scss";

const Header: React.FC = () => {
    const tabs = {
        "Home" : "/",
        "About Me" : "/about",
        "Experience" : "/experience",
        "Blog" : "/blog",
        "Projects" : "/projects",
        "Contact" : "/contacts",
    };

    return (
        <header className="header">
            <div className="tabs">
                {Object.entries(tabs).map(([tabName, href], index) => (
                    <a href={href} key={index} className="tab">
                        {tabName}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Header;
