import React from 'react';
import reservoirTableStyle from '../styles/ReservoirTable.module.css';
import reservoirListStyle from "../styles/ReservoirList.module.css";
import SearchWindow from "./SearchWindow";
import ReservoirList from "./ReservoirList";
import styles from '../styles/ReservoirTable.module.css';

const ReservoirTable: React.FC = () => {
    const reservoirs = ['Резервуар 501', 'Резервуар 506', 'Резервуар 511'];

    return (
        <div className={reservoirTableStyle.container}>
            <SearchWindow className={styles['searchWindow']} />
            <ReservoirList reservoirs={reservoirs} className={reservoirListStyle.reservoirList} />
        </div>
    );
};

export default ReservoirTable;