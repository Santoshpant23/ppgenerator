import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { NextSeo } from 'next-seo';




const Contact = () => {
    return (
        <div className={styles.container}>
            <NextSeo
                title="PPGenerator || Contact"
                description="Privacy Policy generator used to generate policy pages for app and website"

            />

            <nav className={styles.mainnav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/privacy-policy">Policy</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <main className={styles.main}>

                <div className={styles.innerdiv}>

                    <h2>Contact Us</h2>

                    <p className={styles.para}>

                        If you have any issue with this web-app or for any business related purpose then you can reach out to me either on mail or on social medias as well. All the necessary details are below:  <br /> <br />

                        <b>Email:</b>  <span className={styles.spancontact}>iamsantoshpant@gmail.com</span> <br /><br />
                        <b>Website:</b>  <span className={styles.spaan} > <a href="https://www.santoshpant.com.np/" target='_blank'>santoshpant.com.np</a> </span>

                    </p>
                </div>
            </main >
            <footer className={styles.footer}>
                <a
                    href="https://www.ppgenerator.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copyright @ ppgenerator 2022
                    <span className={styles.logo}>
                        <Image src="/logo.png" alt="ppgenerator logo" width={25} height={25} />
                    </span>
                </a>
            </footer>
        </div >
    )
}

export default Contact;