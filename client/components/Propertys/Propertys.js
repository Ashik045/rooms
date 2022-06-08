import React from 'react'
import PropertyItem from '../PropertyItem/PropertyItem'
import styles from './propertys.module.scss'


const Propertys = ({propertyDetails}) => {
  return (
    <div className={styles.propertys}>
            <h2>Browse by propertys</h2>
        <div className={styles.propertys_main}>
            {propertyDetails.map((details) => {
                return <PropertyItem itemDetails={details} key={details.id}/>
            })}
        </div>

    </div>
  )
}

export default Propertys