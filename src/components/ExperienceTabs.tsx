import React, { useState } from 'react';
import '../assets/styles/components/ExperienceTabs.scss';
import ExperienceTable from './ExperienceTable';

type TabKey = 'languages' | 'frameworks' | 'devops' | 'others';

const ExperienceTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('languages');

    const tabs = [
        { key: 'languages', label: 'Languages' },
        { key: 'frameworks', label: 'Frameworks' },
        { key: 'devops', label: 'DevOps' },
        { key: 'others', label: 'Others' },
    ];

    const experienceData: Record<TabKey, { technology: string; years: number[] }[]> = {
        languages: [
            { technology: 'PHP', years: [2019, 2020, 2021, 2022, 2023, 2024] },
            { technology: 'JavaScript', years: [2022, 2024] },
            { technology: 'GoLang', years: [2023, 2024] },
        ],
        frameworks: [
            { technology: 'Symfony', years: [2020, 2021] },
            { technology: 'Laravel', years: [2019, 2021, 2022] },
            { technology: 'React', years: [2021, 2023, 2024] },
        ],
        devops: [
            { technology: 'Docker', years: [2020, 2021, 2022, 2023, 2024] },
            { technology: 'Kubernetes', years: [2023, 2024] },
        ],
        others: [
            { technology: 'Google Cloud', years: [2021, 2022, 2023, 2024] },
            { technology: 'GraphQL', years: [2023, 2024] },
        ],
    };

    return (
        <div className="experience-tabs-section">
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
