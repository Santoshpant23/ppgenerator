import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { NextSeo } from 'next-seo';




function about() {
    return (
        <div className={styles.container}>
            <NextSeo
                title="PPGenerator | About Us"
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


                    <h2>Hello there,</h2>
                    <p className={styles.para}>

                        This web-app aims at making journey of bloggers and developers easy without being worried by privacy policy page. The privacy policy generated by this website might resemble with some other websites as well. But the whole point is that, at the end of the day it is just policy and it will certainly be same. Basically it fulfills all the requirements demanded by google. So don't worry it will be perfect.

                        Also there is About Us and DMCA generaters as well. They are also preety much well designed and I have tried my best to make it as professional as i can.

                        If you have any suggestions on how I can improve this web-app then do let me know.

                        This web-app is made by santosh pant as a hobby project and anyone who wish to contribute to this website can contact him at <span className={styles.span}>iamsantoshpant@gmail.com </span>  or can get connected with him in social media by following link
                    </p>

                    <button className={styles.btn}>
                        <a href="https://www.santoshpant.com.np/" target="_blank">
                            Click Here
                        </a>
                    </button>
                </div>
            </main>
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
        </div>
    )
}

export default about;