import React from 'react'
import Header from "../components/Header";
import ReservoirTable from "../components/ReservoirTable";
import ReservoirScreen from "../components/ReservoirScreen";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header/>
            <ReservoirTable/>
            <ReservoirScreen
                name="Резервуар 501"
                resource="Керосин"
                volume={15000}
                unit="Тонны"
                status="Резервуар не заблокирован"
            />
        </div>
    )
}

export default HomePage;