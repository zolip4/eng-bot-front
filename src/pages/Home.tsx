import React from "react";
import HomeIntro from "../components/HomeIntro";
import HowItWorks from "../components/HowItWorks";
import TechnologiesSection from "../components/TechnologiesSection";

const Home: React.FC = () => {
    return (
        <>
            <HomeIntro />

            <HowItWorks />

            <TechnologiesSection />
        </>
    );
};

export default Home;
