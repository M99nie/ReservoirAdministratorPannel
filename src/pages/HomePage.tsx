import React from 'react'
import Header from "../components/Header";
import ReservoirTable from "../components/ReservoirTable";
import ReservoirScreen from "../components/ReservoirScreen";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header/>
            <ReservoirTable/>
            <ReservoirScreen/>
        </div>
    )
}

export default HomePage;