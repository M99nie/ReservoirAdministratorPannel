import React from 'react'
import styles from '../styles/ResScreenHeader.module.css'

const ResScreenHeader: React.FC = () => {
    return (
      <div className={styles['ResScreenHeader']}>
          <h2>Информация о резервуаре</h2>
      </div>
    );
}
export default ResScreenHeader;