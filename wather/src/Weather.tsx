import sunIcon from './assets/icons/sun.svg'
import rainIcon from './assets/icons/cloud-rain.svg'
import snowIcon from './assets/icons/cloud-snow.svg'
import styles from './Weather.module.css'

export const Weather = (): any => {
   

    
    return (
     <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.content}>
        <h2 className={styles.title}>Weather sounds</h2>
        <div className={styles.cards}>
            <div className={styles.forestCard}><img src={sunIcon} alt="sun" width={60} height={60}/></div>
            <div className={styles.rainCard}><img src={rainIcon} alt="sun" width={60} height={60}/></div>
            <div className={styles.snowCard}><img src={snowIcon} alt="sun" width={60} height={60}/></div>
        </div>
        <div className={styles.volume}>
            <input type="range" />
        </div>
        </div>
    </div>)
}