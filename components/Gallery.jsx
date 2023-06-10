import Image from 'next/image';
import styles from '../styles/Gallery.module.css'
import { CameraIcon, PhotoIcon } from '@heroicons/react/24/outline';
const ImageGallery = () => {
    const images = [
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376748/zendora/Gone_nbvn0u.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Gtwo_iy9r5x.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Gthree_wpbm5y.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Gfour_kmmey2.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376746/zendora/Gfive_qdrdfs.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Gsix_ftfgfz.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376748/zendora/Gseven_jljnkg.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376746/zendora/Geight_oxthb7.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376748/zendora/Gnine_hch4q3.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Gten_ja6l73.png',
        'https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Geleven_uun0ek.png',
    ];
    const imageContainer = (item) => {
        console.log(item)
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <CameraIcon className={styles.cameraIcon} />
                <h2>Our Work</h2>
                <span>Gallery</span>
            </div>

            <div className={styles.gallery}>
                {images.map((image, index) => (
                    <div onClick={() => imageContainer(index)} className={styles.item} key={index}>
                        <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            fill
                            className={styles.image}
                        />
                        <div className={styles.overlay}>
                            <PhotoIcon className={styles.photoIcon} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
