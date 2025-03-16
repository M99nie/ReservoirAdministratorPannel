import React from "react";
import styles from '../styles/SearchWindow.module.css';
import search from '../resources/images/Search.png';

interface SearchWindowProps {
    className?: string;
}

const SearchWindow: React.FC<SearchWindowProps> = () => {
    return (
        <div className={styles.SearchWindow}>
            <h2> Список резервуаров </h2>
            <button className={styles.SearchButton}><img src={search} alt='поиск'/></button>
        </div>
    );
};
export default SearchWindow