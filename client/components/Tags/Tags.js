import React from 'react';
import styles from './tags.module.scss';

function Tags() {
    return (
        <div className={styles.tags}>
            <div className={styles.tags_main}>
                <span>Travel</span>
                <span>Comunication</span>
                <span>City</span>
                <span>Couple</span>
                <span>Nature</span>
            </div>
        </div>
    );
}

export default Tags;
