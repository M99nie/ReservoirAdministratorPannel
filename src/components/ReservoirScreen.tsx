import React from 'react';
import styles from '../styles/ReservoirScreen.module.css';
import ResScreenHeader from './ResScreenHeader';
import ResSmall from '../resources/images/бак.png';
import ResImg from '../resources/images/бочка.png';
import ResHighlight from '../resources/images/кружочки.png';
import DropPlus from '../resources/images/капляплюс.png';
import Mass from '../resources/images/гиря.png';
import fill from '../resources/images/Vector 1.png'
import lock from '../resources/images/замочек.png'

interface ReservoirDetailsProps {
    name: string;
    resource: string;
    volume: number;
    unit: string;
    status: string;
}

const ReservoirScreen: React.FC<ReservoirDetailsProps> = ({
    name,
    resource,
    volume,
    unit,
    status,
}) => {
    return (
        <div className={styles.reservoirScreen}>
            <ResScreenHeader />

            {/* Изображение резервуара и подсветка */}
            <div className={styles.imageContainer}>
                <img src={ResImg} alt="Резервуар" className={styles.reservoirImage} />
                <img src={ResHighlight} alt="Подсветка" className={styles.highlightImage} />
            </div>

            {/* Информация о резервуаре */}
            <div className={styles.detailsContainer}>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={ResSmall} alt='Имя резервуара'/></span>
                    <span className={styles.detailValue}>{name}</span>
                </div>

                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={DropPlus} alt='Капля'/></span>
                    <span className={styles.detailValue}>{resource}</span>
                </div>

                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={Mass} alt='Объём'/></span>
                    <span className={styles.detailValue}>{volume.toLocaleString()}</span>
                </div>

                <div className={styles.buttonGroup}>
                    <button className={styles.tonnButton}>Тонны</button>
                    <button className={styles.percentButton}>%</button>
                </div>

                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>
                        <img className={styles.massImage} src={Mass} alt='Объём'/>
                        <img className={styles.fillImage} src={fill}/>
                    </span>
                    <span className={styles.detailValue}>{unit}</span>
                </div>

                {/* Кнопки */}
                <div className={styles.buttonGroup}>
                    <button className={styles.saveButton}>Сохранить</button>
                    <button className={styles.cancelButton}>Отменить</button>
                </div>

                {/* Статус и кнопка удаления */}
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={lock} alt='блокировка'/></span>
                    <span className={styles.statusText}>{status}</span>
                </div>
                <button className={styles.deleteButton}>Удалить резервуар</button>
            </div>
        </div>
    );
};

export default ReservoirScreen;