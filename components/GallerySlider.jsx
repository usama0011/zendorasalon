import Image from 'next/image';
import React, { useState } from 'react'
import styles from '../styles/GallerySlider.module.css'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
const GallerySlider = () => {
  const galleryData = [
    {
      coverImage: "https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376746/zendora/Gfive_qdrdfs.png",
      itemNo: "01",
      itemTitle: "The Massage and Waxing",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376748/zendora/Gseven_jljnkg.png",
      itemNo: "02",
      itemTitle: "The Threading and Lashes",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Gten_ja6l73.png",
      itemNo: "03",
      itemTitle: "Hair Styling, Nails, Spa Services",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376748/zendora/Gnine_hch4q3.png",
      itemNo: "04",
      itemTitle: "Hair Washing",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/Geleven_uun0ek.png",
      itemNo: "05",
      itemTitle: "Hair Cutting and Color",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0)
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : galleryData.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < galleryData.length - 1 ? prevIndex + 1 : 0));
  };
  const handleOpenImage = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };
  const handleActiveIndex = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className={styles.sliderContainer}>
      <h1>Our Suites</h1>
      <div
        className={styles.slider}
      >
        <div onClick={handlePrevSlide} style={{ left: 0 }} className={styles.arrowContainer}>
          <ChevronLeftIcon className={styles.a} />
        </div>
        {galleryData.map((item, i) => {
          return (
            <div  key={i} className={styles.slide} style={{ transform: `translateX(-${currentIndex * 390}px)` }} onClick={handleOpenImage}>
              <Image  onClick={()=>handleActiveIndex(i)} src={item.coverImage} alt='salonImage' fill />
              <div className={styles.addson}>
                <div className={styles.top}>
                  <span className={styles.spanone}>{item.itemNo}</span>
                  <p>{item.itemTitle}</p>
                </div>
                <div className={styles.bottom}>
                  <p>{item.itemDescription}</p>
                </div>
              </div>
            </div>
          )
        })}
        <div style={{ right: -10 }} onClick={handleNextSlide} className={styles.arrowContainer}>
          <ChevronRightIcon className={styles.a} />
        </div>
      {isImageOpen && (
        <div className={styles.imageContainer}>
          <div className={styles.imageModal} onClick={handleCloseImage} />
          <div className={styles.imageModalContent}>
            <Image src={galleryData[activeIndex].coverImage} alt='salonImage' fill />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default GallerySlider;
