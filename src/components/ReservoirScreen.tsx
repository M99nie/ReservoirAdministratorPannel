import React, { useEffect, useState } from 'react';
import styles from '../styles/ReservoirScreen.module.css';
import ResScreenHeader from './ResScreenHeader';
import ResSmall from '../resources/images/бак.png';
import ResImg from '../resources/images/бочка.png';
import ResHighlight from '../resources/images/кружочки.png';
import DropPlus from '../resources/images/капляплюс.png';
import Mass from '../resources/images/гиря.png';
import fill from '../resources/images/Vector 1.png';
import lock from '../resources/images/замочек.png';
import { useReservoirStore } from '../api/reservoirStore';
import ConfirmDeleteWindow from "./ConfirmDeleteWindow";

const ReservoirScreen: React.FC = () => {
    const { selectedReservoir, addReservoir, updateReservoir, deleteReservoir } = useReservoirStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleDelete = () => {
        if (selectedReservoir) {
            deleteReservoir(selectedReservoir.id);
            setIsModalOpen(false); // Закрываем окно после удаления
        }
    };

    const [name, setName] = useState(selectedReservoir?.name || '');
    const [resource, setResource] = useState(selectedReservoir?.resource || '');
    const [volume, setVolume] = useState(selectedReservoir?.volume || 0);
    const [currentVolume, setCurrentVolume] = useState(selectedReservoir?.currentVolume || 0);
    const [unit, setUnit] = useState<'Тонны' | '%'>('Тонны');
    const [isLocked, setIsLocked] = useState(selectedReservoir?.isLocked || false);

    useEffect(() => {
        if (selectedReservoir) {
            setName(selectedReservoir.name);
            setResource(selectedReservoir.resource);
            setVolume(selectedReservoir.volume);
            setCurrentVolume(selectedReservoir.currentVolume);
            setIsLocked(selectedReservoir.isLocked);
        }
    }, [selectedReservoir]);

    const handleUnitChange = (newUnit: 'Тонны' | '%') => {
        if (newUnit !== unit) {
            setUnit(newUnit);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setCurrentVolume(unit === 'Тонны' ? value : (value * volume) / 100);
        }
    };

    const displayValue = unit === 'Тонны' ? currentVolume : ((currentVolume / volume) * 100).toFixed(2);

    const handleSave = () => {
        if (!name || !resource || !volume || !currentVolume) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const updatedReservoir = {
            id: selectedReservoir?.id || Date.now().toString(),
            name,
            resource,
            volume,
            currentVolume,
            isLocked,
        };

        if (selectedReservoir) {
            updateReservoir(selectedReservoir.id, updatedReservoir);
        } else {
            addReservoir(updatedReservoir);
        }
        handleCancel();
    };

    const handleCancel = () => {
        setName('');
        setResource('');
        setVolume(0);
        setUnit('Тонны');
        setCurrentVolume(0);
        setIsLocked(false);
    };

    return (
        <div className={styles.reservoirScreen}>
            <ResScreenHeader />
            <div className={styles.imageContainer}>
                <img src={ResImg} alt="Резервуар" className={styles.reservoirImage} />
                <img src={ResHighlight} alt="Подсветка" className={styles.highlightImage} />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={ResSmall} alt='Имя резервуара' /></span>
                    <input className={styles.detailValue} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Название резервуара" />
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={DropPlus} alt='Капля' /></span>
                    <select className={styles.detailValue} value={resource} onChange={(e) => setResource(e.target.value)}>
                        <option value="">Выберите тип топлива</option>
                        <option value="Керосин">Керосин</option>
                        <option value="Дизель">Дизель</option>
                        <option value="Бензин">Бензин</option>
                        <option value="Автомобильное топливо">Автомобильное топливо</option>
                        <option value="Авиационное топливо">Авиационное топливо</option>
                        <option value="Газ">Газ</option>
                    </select>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}><img src={Mass} alt='Объём' /></span>
                    <input className={styles.detailValue} type="number" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} placeholder="Объём" />
                </div>
                <div className={styles.buttonGroup}>
                    <button className={unit === 'Тонны' ? styles.activeButton : styles.inactiveButton} onClick={() => handleUnitChange('Тонны')}>Тонны</button>
                    <button className={unit === '%' ? styles.activeButton : styles.inactiveButton} onClick={() => handleUnitChange('%')}>%</button>
                </div>
                <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>
                        <img src={Mass} alt='Объём' />
                        <img className={styles.fillImage} src={fill} alt='Заполненность' />
                    </span>
                    <input className={styles.detailValue} type="number" value={displayValue} onChange={handleInputChange} placeholder="Текущая заполненность" />
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.saveButton} onClick={handleSave}>Сохранить</button>
                    <button className={styles.cancelButton} onClick={handleCancel}>Отменить</button>
                </div>
                {selectedReservoir && (
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>
                            <img src={lock} alt={'Заблокировано'}/>
                        </span>
                        <span className={styles.detailValue}>
                                {isLocked ? 'Резервуар заблокирован' : 'Резервуар не заблокирован'}
                        </span>
                        <button
                            className={`${styles.toggleButton} ${isLocked ? styles.locked : styles.unlocked}`}
                            onClick={() => setIsLocked(!isLocked)}
                        >
                        </button>

                    </div>

                )}
                {selectedReservoir && <button className={styles.deleteButton} onClick={() => setIsModalOpen(true)}>Удалить резервуар</button>}
                <ConfirmDeleteWindow
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleDelete}
                />
            </div>
        </div>
    );
};

export default ReservoirScreen;
