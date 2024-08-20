import React from 'react';
import '../assets/styles/components/ContactBlock.scss';

const ContactBlock: React.FC = () => {
    return (
        <div className="contact-block">
            <h2>Contact Me</h2>
            <ul>
                <li>
                    <strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/asobaleu/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/asobaleu
                    </a>
                </li>
                <li>
                    <strong>Phone:</strong>
                    <a href="tel:+1234567890">+48451666139</a>
                </li>
                <li>
                    <strong>Email:</strong>
                    <a href="mailto:your.email@example.com">zolip4toxa@gmail.com</a>
                </li>
                <li>
                    <strong>Location:</strong>
                    Warsaw, Poland
                </li>
            </ul>
        </div>
    );
};

export default ContactBlock;
