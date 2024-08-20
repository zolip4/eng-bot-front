import React from 'react';
import '../assets/styles/components/AboutMe.scss';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-section">
            <div className="content-wrapper">
                <div className="profile-pic">
                    <img src="/images/profile.jpg" alt="Profile" />
                </div>
                <div className="details">
                    <h2>About Me</h2>
                    <ul>
                        <li><strong>Name:</strong> Anton</li>
                        <li><strong>Birth Year:</strong> 1998</li>
                        <li><strong>Role:</strong> Software Developer</li>
                        <li><strong>Location:</strong> Poland</li>
                        <li><strong>Interests:</strong> Coding, Beer, Traveling</li>
                    </ul>
                    <p className="bio">
                        I am a Software Developer with 5 years of experience, specializing in e-commerce, automation, and ERP systems. My skill set includes PHP, GoLang, JavaScript, HTML, CSS, Docker, REST, GraphQL, and RabbitMQ. I have extensive experience with frameworks like Magento, Shopware, Symfony, and Laravel, and have worked with Google Cloud Platform. I'm a strong team player with international experience, and while PHP is my primary language, I'm excited to further my expertise in GoLang for its performance and scalability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
