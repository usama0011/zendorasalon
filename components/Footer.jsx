import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className={styles.outer}>
            <div className={styles.innerContainer}>
                <div className={styles.upperPart}>
                    <div className={styles.upperLeft}>
                        <div className={styles.imageContainer}>
                            <Image className={styles.myLogo} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376745/zendora/companyImage_zoix8r.png" alt='userImage' fill />
                        </div>
                    </div>
                    <div className={styles.upperRight}>
                        <div className={styles.imgContainer}>
                            <Image fill src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376746/zendora/facebook_m7ewlj.png" alt='userImage' />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image fill src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376745/zendora/instagram_n7ytak.png" alt='userImage' />

                        </div>
                        <div className={styles.imgContainer}>
                            <Image fill src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686391442/zendora/youtube_vtkjuv.png" alt='userImage' />

                        </div>
                    </div>
                </div>
                <div className={styles.middlePart}>
                    <div className={styles.contactInfo}>
                        <h3>Contact Info</h3>
                        <div>
                            <span>Address:</span>
                            <span>3820 Dave Ward Dr, Conway, AR 72034, USA</span>
                        </div>
                        <div>
                            <span>Phone:</span>
                            <span>+1 123 456 789</span>
                        </div>
                        <div>
                            <span>Email:</span>
                            <span>INFO@ZENDORASALON.COM</span>
                        </div>
                    </div>
                    <div className={styles.quickLinks}>
                        <h3>Quick Links</h3>
                        <ul>
                            <Link href="/ourprofessionals"><li>Our Professionals</li></Link>
                            <Link href="/oursuites"><li>Our Suites</li></Link>
                            <Link href="/"><li>Gallery</li></Link>
                            <Link href="/Blogs"><li>Blog</li></Link>
                            <Link href="/contactus"><li>Contact Us</li></Link>
                            <Link href="/signup"><li>Sign Up</li></Link>
                            <Link href="/login"><li>Login</li></Link>
                        </ul>
                    </div>
                    <div className={styles.ourLocation}>
                        <h3>Our Location</h3>
                        <p>3820 Dave Ward Dr, Conway, AR 72034, USA</p>
                    </div>
                    <div className={styles.paymentMethods}>
                        <h3>Payment Methods</h3>
                        <p>
                        Each Professional is an independent business owner. Please speak to your service provider for more details.
                        </p>
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.bottomLeft}> © Copyright 2022 Zendora</div>
                    <div className={styles.bottomRight}>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Site map</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer