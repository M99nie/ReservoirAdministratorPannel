import React from 'react';
import styles from '../styles/ReservoirList.module.css';
import { useReservoirStore } from '../api/reservoirStore'; // Импортируем хранилище
import {Reservoir} from "../api/reservoirs";

interface ReservoirListProps {
    reservoirs: Reservoir[]; // Принимаем массив резервуаров
    className?: string;
}

const ReservoirList: React.FC<ReservoirListProps> = ({ reservoirs, className }) => {
    const { selectReservoir } = useReservoirStore(); // Получаем функцию выбора резервуара

    return (
        <div className={`${styles.ReservoirList} ${className}`}>
            <ul>
                {reservoirs.map((reservoir) => (
                    <li key={reservoir.id} onClick={() => selectReservoir(reservoir)}>
                        {reservoir.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservoirList;