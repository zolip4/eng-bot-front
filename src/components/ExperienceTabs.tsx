import React, { useState } from 'react';
import '../assets/styles/components/ExperienceTabs.scss';
import ExperienceTable from './ExperienceTable';

type TabKey = 'languages' | 'frameworks' | 'devops' | 'api' | 'databases' | 'messaging' | 'frontend';

const ExperienceTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('languages');

    const tabs = [
        { key: 'languages', label: 'Languages' },
        { key: 'frameworks', label: 'Frameworks' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'devops', label: 'DevOps' },
        { key: 'api', label: 'Api' },
        { key: 'databases', label: 'Databases' },
        { key: 'messaging', label: 'Messaging' },
    ];

    const experienceData: Record<TabKey, { technology: string; years: number[] }[]> = {
        languages: [
            { technology: 'PHP', years: [2019, 2020, 2021, 2022, 2023, 2024] },
            { technology: 'JavaScript', years: [2020, 2021, 2022, 2023, 2024] },
            { technology: 'GoLang', years: [2023, 2024] },
        ],
        frameworks: [
            { technology: 'Magento 2', years: [2020, 2021, 2022, 2023, 2024] },
            { technology: 'Symfony', years: [2021, 2023] },
            { technology: 'Laravel', years: [2021, 2022] },
            { technology: 'WordPress', years: [2019, 2021, 2022, 2023, 2024] },
            { technology: 'Yii2', years: [2019, 2021] },
        ],
        frontend: [
            { technology: 'React', years: [2024] },
            { technology: 'Vue.js', years: [2023, 2024] },
            { technology: 'Node.js', years: [2023] },
            { technology: 'Knockout.js', years: [2019, 2020, 2021, 2022, 2023] },
            { technology: 'HTML', years: [2019, 2020, 2021, 2022, 2023, 2024] },
            { technology: 'CSS', years: [2019, 2020, 2021, 2022, 2023, 2024] },
            { technology: 'SCSS', years: [2019, 2020, 2021, 2022, 2023, 2024] },
            { technology: 'Bootstrap', years: [2019, 2020] },
        ],
        devops: [
            { technology: 'Docker', years: [2021, 2022, 2023, 2024] },
            { technology: 'Kubernetes', years: [2023] },
            { technology: 'Bash', years: [2021, 2022, 2023, 2024] },
            { technology: 'Nginx', years: [2021, 2020, 2021, 2022, 2023, 2024] },
            { technology: 'CI/CD', years: [2023, 2024] },
            { technology: 'Google Cloud', years: [2023, 2024] },
        ],
        api: [
            { technology: 'REST Api', years: [2021, 2022, 2023, 2024] },
            { technology: 'SOAP Api', years: [2023, 2024] },
            { technology: 'GraphQL', years: [2023, 2024] },
            { technology: 'REST Hooks', years: [2023, 2024] },
        ],
        databases: [
            { technology: 'SQL', years: [2020, 2021, 2022, 2023, 2024] },
            { technology: 'MySQL', years: [2020, 2021, 2022, 2023, 2024] },
            { technology: 'MongoDB', years: [2022, 2023, 2024] },
            { technology: 'Elasticsearch', years: [2021, 2022, 2023] },
            { technology: 'Redis', years: [2021, 2023] },
        ],
        messaging: [
            { technology: 'RabbitMQ', years: [2021, 2023] },
            { technology: 'Laravel Queue', years: [2023] },
            { technology: 'Pub/Sub', years: [2024] },
        ],
    };

    return (
        <div className="experience-tabs-section">
            <h3>Timeline of Technology Usage</h3>
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={activeTab === tab.key ? 'active' : ''}
                        onClick={() => setActiveTab(tab.key as TabKey)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <ExperienceTable experienceData={experienceData[activeTab]}/>
            </div>
        </div>
    );
};

export default ExperienceTabs;
