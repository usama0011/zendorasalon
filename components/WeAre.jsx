import styles from '../styles/WeAre.module.css';
import { useEffect, useRef, useState } from "react";
import BeautyImg from '../public/beauty.png';
import Image from 'next/image';
import { PlayCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
const WeAre = () => {
    const [showVideo, setShowVideo] = useState(false);
    const vedioRef = useRef(null)
    const handleVideoClick = () => {
        setShowVideo(true);
    };

    const handleCloseClick = () => {
        setShowVideo(false);
    };
    useEffect(() => {
        const handleclickoutside = (e) => {
            if (vedioRef.current && !vedioRef.current.contains(e.target)) {
                setShowVideo(false)
            }
        }
        document.addEventListener("mousedown", handleclickoutside);
        return () => {
            document.removeEventListener('mousedown', handleclickoutside)
        }
    }, [])
    return (
        <div className={styles.outerContainer}>

            <div className={styles.container}>
                <h1 className={styles.title}>WHO WE ARE</h1>
                <div className={styles.imageContainer}>
                    <div className={styles.overlay}>
                        <h2 className={styles.overlayTitle}>Zendora</h2>
                        <button className={styles.playButton} onClick={handleVideoClick}>
                            <PlayCircleIcon className={styles.playIcon} />
                        </button>
                    </div>
                    <Image
                        src={BeautyImg}
                        alt="We Are Image"
                        className={styles.image}
                    />            </div>
                {showVideo && (
                    <div className={styles.videoOverlay}>
                        <div ref={vedioRef} className={styles.videoContainer}>
                            <button className={styles.closeButton} onClick={handleCloseClick}>
                                <XMarkIcon className={styles.closeIcon} />
                            </button>
                            <div className={styles.videoWrapper}>
                                <video autoPlay
                                    className={styles.iframe}
                                    src="/zendora.mp4"
                                    controls
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeAre;
