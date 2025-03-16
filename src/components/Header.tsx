import React from 'react'
import styles from '../styles/Header.module.css'
import gear from '../resources/images/Group.png'

const Header : React.FC = () => {
    return (
        <header className={styles.header}>
            <button className={styles.SettingsButton}><img src={gear} alt='настройки'/></button>
            <h1>Панель администрирования резервуаров</h1>
            <button className={styles.AddButton}>Добавить резервуар</button>
            <button className={styles.ReservoirScreenButton}>Экран резервуаров</button>
        </header>
    );
};
export default Header;