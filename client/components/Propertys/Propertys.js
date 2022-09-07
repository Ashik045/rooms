import React from 'react';
import PropertyItem from '../PropertyItem/PropertyItem';
import styles from './propertys.module.scss';

function Propertys({ propertyDetails, propertyList2 }) {
    return (
        <div className={styles.propertys}>
            <h2>Browse by propertys</h2>
            <div className={styles.propertys_main}>
                {propertyDetails.map((details) => (
                    <PropertyItem itemDetails={details} key={details.id} propertyList2={propertyList2} />
                ))}
            </div>
        </div>
    );
}

export default Propertys;
