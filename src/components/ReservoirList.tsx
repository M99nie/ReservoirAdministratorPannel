import React from 'react';
import styles from '../styles/ReservoirList.module.css';

interface ReservoirListProps {
    reservoirs: string[];
    className?: string;
}

const ReservoirList: React.FC<ReservoirListProps> = ({ reservoirs, className }) => {
    return (
        <div className={`${styles.ReservoirList} ${className}`}>
            <ul>
                {reservoirs.map((reservoir, index) => (
                    <li key={index}>{reservoir}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReservoirList;