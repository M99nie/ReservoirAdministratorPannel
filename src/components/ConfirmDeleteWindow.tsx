import React from 'react';
import styles from '../styles/ConfirmDelete.module.css';
import sign from '../resources/images/ахтунг.png'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDeleteWindow: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.header}>
                    <span className={styles.sign}>
                        <img  src={sign}/>
                    </span>
                    <h2 className={styles.h2}>Обратите внимание</h2>
                </div>
                <p>Вы действительно хотите удалить резервуар?</p>
                <div className={styles.buttonGroup}>
                    <button onClick={onConfirm} className={styles.activeButton}>Удалить</button>
                    <button onClick={onClose} className={styles.inactiveButton}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteWindow;
