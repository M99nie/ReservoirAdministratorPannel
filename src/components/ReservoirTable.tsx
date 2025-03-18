import React, { useEffect } from 'react';
import { useReservoirStore } from '../api/reservoirStore'; // Импортируем хранилище
import reservoirTableStyle from '../styles/ReservoirTable.module.css';
import reservoirListStyle from "../styles/ReservoirList.module.css";
import SearchWindow from "./SearchWindow";
import ReservoirList from "./ReservoirList";
import styles from '../styles/ReservoirTable.module.css';

const ReservoirTable: React.FC = () => {
    const { reservoirs, fetchReservoirs } = useReservoirStore();

    useEffect(() => {
        fetchReservoirs();
    }, [fetchReservoirs]);

    return (
        <div className={reservoirTableStyle.container}>
            <SearchWindow className={styles['searchWindow']} />
            <ReservoirList reservoirs={reservoirs} className={reservoirListStyle.reservoirList} />
        </div>
    );
};

export default ReservoirTable;