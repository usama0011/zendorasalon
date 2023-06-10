import Link from 'next/link';
import styles from '../styles/FindLocation.module.css'
import Image from 'next/image';

const FindLocation = () => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <h2 className={styles.title}>FIND A LOCATION NEAR YOU</h2>
                <button className={styles.button}><Link href="/ourlocations">View our locations</Link></button>
            </div>
            <Image
                className={styles.backgroundIMage}
                src="/zz.png"
                alt="background image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
    );
};

export default FindLocation;
