import React from "react";
import "../assets/styles/components/HowItWorks.scss";
import Scheme from "../assets/styles/components/Content/Scheme";

const HowItWorks: React.FC = () => {
    return (
        <section className="how-it-works">
            <div className="content">
                <h2>How This Website Works</h2>
                <div className="scheme">
                    <div className="part">
                        <h3>Frontend</h3>
                        <p>The frontend is developed with <strong>React</strong>, styled using <strong>SCSS</strong>,
                            and written in <strong>TypeScript (TSX)</strong> to create a dynamic and responsive user
                            interface.</p>
                    </div>
                    <div className="arrow">➡️</div>
                    <div className="part">
                        <h3>Backend</h3>
                        <p>The backend is powered by <strong>Golang</strong>, utilizing <strong>GraphQL</strong> to
                            efficiently connect with the frontend and handle API requests and business logic.</p>
                    </div>
                    <div className="arrow">➡️</div>
                    <div className="part">
                        <h3>Deployment</h3>
                        <p>The application is deployed on <strong>Google Cloud Platform (GCP)</strong> using <strong>Cloud
                            Run</strong> for scalable and serverless deployment.</p>
                    </div>
                </div>
                <h3 className="scheme-title">System Architecture Overview</h3>
                <div className="diagram">
                    <Scheme/>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
