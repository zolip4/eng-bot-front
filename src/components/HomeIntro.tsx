import React from "react";
import "../assets/styles/components/HomeIntro.scss";

const HomeIntro: React.FC = () => {
    return (
        <section className="home-intro">
            <div className="intro-content">
                <h1>Welcome to My Personal Website</h1>
                <p>
                    Hi, I'm Anton. I'm passionate about Software Development.
                    Here, you can learn more about my experiences, explore my blog, and discover the solutions I've developed.
                </p>
                <div className="intro-buttons">
                    <a href="/about" className="btn">About Me</a>
                    <a href="/projects" className="btn">My Projects</a>
                    <a href="/contact" className="btn">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;
