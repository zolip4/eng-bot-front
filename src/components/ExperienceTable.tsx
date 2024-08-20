import React from 'react';

interface ExperienceData {
    technology: string;
    years: number[];
}

interface ExperienceTableProps {
    experienceData: ExperienceData[];
}

const years = [2019, 2020, 2021, 2022, 2023, 2024];

const ExperienceTable: React.FC<ExperienceTableProps> = ({ experienceData }) => {
    return (
        <table className="experience-table">
            <thead>
            <tr>
                <th>Technology</th>
                {years.map(year => (
                    <th key={year}>{year}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {experienceData.map((data, index) => (
                <tr key={index}>
                    <td>{data.technology}</td>
                    {years.map(year => (
                        <td key={year} className={data.years.includes(year) ? 'active' : ''}></td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ExperienceTable;
