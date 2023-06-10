import Image from 'next/image'
import React from 'react'
import styles from '../styles/Professionals.module.css'
import Link from 'next/link'
const Professionals = () => {
  return (

    <div className={styles.container}>
      <div className={styles.box}>
        <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376750/zendora/pone_ehiawr.png" alt="Image 1" width={500} height={500} />
        <div className={`${styles.content} ${styles.contentone}`}>
          <h3 className={styles.title}>Profess<span className={styles.stylish}>ional</span><br />
            of the Month</h3>
          <Link href="/" className={styles.button}>Learn More</Link>
        </div>
      </div>
      <div className={styles.box}>
        <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376751/zendora/ptwo_mlkdml.png" alt="Image 2" width={500} height={500} />
        <div className={`${styles.content} ${styles.contenttwo}`}>
          <h3 className={styles.title}>The Lash <span className={styles.stylish}>Tech</span></h3>
          <Link href="/" className={styles.button}>Learn More</Link>
        </div>
      </div>
      <div className={styles.box}>
        <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376749/zendora/pthree_xqdksd.png" alt="Image 3" width={500} height={500} />
        <div className={`${styles.content} ${styles.contentthree}`}>
          <h3 className={styles.title}>The Nail <span className={styles.stylish}>Tech</span></h3>
          <Link href="/" className={styles.button}>Learn More</Link>
        </div>
      </div>
      <div className={styles.box}>
        <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376748/zendora/Mfour_wuv740.png" alt="Image 4" width={500} height={500} />
        <div className={`${styles.content} ${styles.contentfour}`}>
          <h3 className={styles.title}>The Mass<span className={styles.stylish}>age</span><br />
            Limited time only</h3>
          <Link href="/" className={styles.button}>Learn More</Link>
        </div>
      </div>
    </div>

  )
}

export default Professionals