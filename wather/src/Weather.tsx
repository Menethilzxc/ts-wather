import React, { useRef, useState } from 'react'
import sunIcon from './assets/icons/sun.svg'
import rainIcon from './assets/icons/cloud-rain.svg'
import snowIcon from './assets/icons/cloud-snow.svg'
import pauseIcon from './assets/icons/pause.svg'
import forestSound from './assets/sounds/summer.mp3'
import rainSound from './assets/sounds/rain.mp3'
import snowSound from './assets/sounds/winter.mp3'


import styles from './Weather.module.css'

export const Weather = (): any => {
    const [currentSound, setCurrentSound] = useState<'forest' | 'rain' | 'snow' | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const handleCardClick = (sound: 'forest' | 'rain' | 'snow') => {
        if (currentSound === sound) {
            if (isPlaying) {
                audioRef.current?.pause()
                setIsPlaying(false)
            } else {
                audioRef.current?.play()
                setIsPlaying(true)
            }
        } else {
           audioRef.current?.pause()

           let newAudioSrc = ''
           switch(sound) {
            case 'forest':
                newAudioSrc = forestSound
                break
            case 'rain':
                newAudioSrc = rainSound
                break
            case 'snow':
                newAudioSrc = snowSound
                break
           }

           const newAudio = new Audio(newAudioSrc)
           newAudio.loop = true
           newAudio.volume = 0.5
           newAudio.play()

           audioRef.current = newAudio
           setCurrentSound(sound)
           setIsPlaying(true)
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const volume = Number(e.target.value) / 100
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }

    return (
     <div className={styles.container}>
        <div className={`${styles.background} ${styles[currentSound ?? 'default']}`} />
        <div className={styles.content}>
        <h2 className={styles.title}>Weather sounds</h2>
        <div className={styles.cards}>
            <div className={styles.forestCard} onClick={() => handleCardClick('forest')}><img src={currentSound === 'forest' && isPlaying ? pauseIcon : sunIcon} alt="sun" width={60} height={60}/></div>
            <div className={styles.rainCard} onClick={() => handleCardClick('rain')}><img src={currentSound === 'rain' && isPlaying ? pauseIcon : rainIcon} alt="sun" width={60} height={60}/></div>
            <div className={styles.snowCard} onClick={() =>handleCardClick('snow')}><img src={currentSound === 'snow' && isPlaying ? pauseIcon : snowIcon} alt="sun" width={60} height={60}/></div>
        </div>
        <div className={styles.volume}>
            <input type="range" onChange={handleVolumeChange} />
        </div>
        </div>
    </div>)
}