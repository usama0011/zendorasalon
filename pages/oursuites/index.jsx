import React from 'react'
import styles from '../../styles/oursuits.module.css'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import GallerySlider from '@/components/GallerySlider'
import Head from 'next/head'
const Index = () => {
 
  return (
    <>
     <Head>
        <title>Our Suites </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.upperContainer}>
          <div className={styles.bgImageContainer}>
            <Image src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376744/zendora/bg_tcm4ex.png" alt='backgourndImage' fill />
          </div>
          <div className={styles.ourprofessionalContainer}>
            <h1>Our Suites</h1>
            <div className={styles.pre}>
              <span>Home</span>/<span> Our Suites</span>
            </div>
          </div>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.pOne}>We broke the ceiling on the industry standard! Each suite is insulated and completely private. We maximized the square footage with sliding doors, and selected suites have windows that can be electronically frosted with the touch of a button! Each room comes with its own thermostat, so you have total control. Our facility is designed for your safety and has surveillance cameras throughout. We also have a designated waiting room for your clients, so that your services are completely interruption free. The waiting room also creates an opportunity to serve walk-ins, which will help build your clientele.</p>
          <p className={styles.pOne}>We believe in the power of social media to grow any business so help yourself to our marketing area, to take photos of your beautiful work without having a ring light in your way! Some salon suites feel a little too sterile and cookie cutter, so we added specialty skylights in interior rooms to bring the outside to you. We offer social media education, industry education, and business tips and tricks! We would love the opportunity to help you grow your business!</p>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.imageContainer}>
            <Image className={styles.myImage} fill src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376772/zendora/suitone_g6wwpe.png" alt='salaonImage' />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.myImage} fill src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376768/zendora/suittwo_n8oton.png" alt='salaonImage' />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.myImage} fill src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376772/zendora/suitone_g6wwpe.png"  alt='salaonImage' />
          </div>
        </div>
        <div className={styles.beliefContainer}>
          <div className={styles.addContainer}>
            <div className={styles.addLeft}>
              <h1>We Believe In</h1>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Hand selected furniture per your profession</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Temperature controls in each suite for maximum comfort</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>A designated secure waiting room for your clients</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Online booking and marketing to help grow your business</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>True to Tone lighting throughout to showcase your creations</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Designated Social Media Area to market your work</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Innovative Skylights in non-window suites to create an inviting atmosphere</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p> Washer and Dryer available on premises</p>
              </div>
            </div>
            <div className={styles.addRight}>
              <Image src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376751/zendora/solan_avg1bs.jpg" alt="Payment Plan" fill />
            </div>
          </div>
          <div className={styles.beliefleft}></div>
          <div className={styles.beliefRight}>
            <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686393375/zendora/blonde-woman-getting-her-hair-done_hpxnqk.jpg" alt="Payment Plan" fill />
          </div>
        </div>
        <GallerySlider/>
        <div className={styles.paymentcontainer}>
          <div className={styles.payment}>
            <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/pay_azfkz7.jpg" alt="Payment Plan" width={500} height={450} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>1 Year Incentives</h3>
              <p className={styles.price}>$199 <br /> </p><p>/ month</p>
              <p className={styles.description}>One-week free rent</p>
              <p className={styles.description}>One week half off</p>
              <button className={styles.button}>Choose Plan</button>
            </div>
          </div>
          <div className={styles.payment}>
            <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/pay_azfkz7.jpg" alt="Payment Plan" width={500} height={450} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>1 Year Incentives</h3>
              <p className={styles.price}>$199 <br /> </p><p>/ month</p>
              <p className={styles.description}>One-week free rent</p>
              <p className={styles.description}>One week half off</p>
              <button className={styles.button}>Choose Plan</button>
            </div>
          </div>
          <div className={styles.payment}>
            <Image className={styles.image} src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376747/zendora/pay_azfkz7.jpg" alt="Payment Plan" width={500} height={450} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>1 Year Incentives</h3>
              <p className={styles.price}>$199 <br /> </p><p>/ month</p>
              <p className={styles.description}>One-week free rent</p>
              <p className={styles.description}>One week half off</p>
              <button className={styles.button}>Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index