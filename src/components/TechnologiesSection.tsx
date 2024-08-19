import React from 'react';
import '../assets/styles/components/TechnologiesSection.scss';
import Magento from "../assets/styles/components/Content/Magento";
import SymfonyLogo from "../assets/styles/components/Content/Symfony";
import ShopwareLogo from "../assets/styles/components/Content/Shopware";
import WPLogo from "../assets/styles/components/Content/WP";

interface Technology {
    name: string;
    years: string;
    projects: string;
    Component: React.FC;
}

const technologies: Technology[] = [
    { name: 'Magento 2', years: '5 years', projects: '10+ projects', Component: Magento },
    { name: 'Symfony', years: '2 years', projects: '3 projects', Component: SymfonyLogo },
    { name: 'Shopware', years: '1 year', projects: '1 project', Component: ShopwareLogo },
    { name: 'Yii2', years: '2 years', projects: '5 projects', Component: Magento },
    { name: 'WordPress', years: '2 years', projects: '7 projects', Component: WPLogo },
];

const TechnologiesSection: React.FC = () => {
    return (
        <div className="technologies-section">
            <h3>Technologies I've Worked With</h3>
            <div className="technologies-grid">
                {technologies.map((tech, index) => (
                    <div className="technology-card" key={index}>
                        <div className="technology-logo">
                            <tech.Component />
                        </div>
                        <h4>{tech.name}</h4>
                        <p>{tech.years}</p>
                        <p>{tech.projects}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesSection;
