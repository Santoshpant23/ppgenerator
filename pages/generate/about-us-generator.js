import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from 'next-seo';



const AboutG = () => {
    // const [compname, setCompname] = useState("company");
    const [namee, setNamee] = useState("");
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState("");
    const customId = "itscustomId";

    const handleClick = () => {
        if (namee == "" || category == "" || email == "") {
            toast.warn("All fields are required", {
                position: "top-center",
                toastId: customId
            })
        }
        else {
            toast.success("Generated", {
                position: "top-center",
                toastId: customId
            })
        }
    }

    return (
        <div className={styles.container}>
            {/* <Head>
                <title>Generate | About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <NextSeo
                title="Generate || About Us"
                description="Generate About Us for any websites or blogs in very simple way and free."

            />
            <nav className={styles.mainnav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/privacy-policy">Policy</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <main className={styles.main}>
                <div className={styles.innerdiv}>


                    <h2>Enter Given details</h2>
                    <form action="" className={styles.myform} method="POST" >
                        <div className={styles.formfields}>

                            <label className={styles.label} >Website Name:</label>
                            <input className={styles.input} type="text" id="first" name="first" placeholder='Enter here...'
                                onChange={(event) => {
                                    setNamee(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className={styles.formfields}>

                            <label className={styles.label} >Category:</label>
                            <input className={styles.input} type="text" id="first" name="first" placeholder='Enter here...'
                                onChange={(event) => {
                                    setCategory(event.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className={styles.formfields}>

                            <label className={styles.label} >Email:</label>
                            <input className={styles.input} type="text" id="first" name="first" placeholder='Enter here...'
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required
                            />
                        </div> <br />


                        <button type="submit" className={styles.btn} onClick={handleClick}>
                            <Link
                                href={{
                                    pathname: (namee == "" || category == "" || email == "") ? "" : "/generate/about-generated",
                                    query: { namee, category, email },
                                }}
                            >Generate</Link>
                        </button>


                    </form >
                </div>
            </main >
            <footer className={styles.footer}>
                <a
                    href="https://www.ppgenerator.com/"

                >
                    Copyright @ ppgenerator 2022
                    <span className={styles.logo}>
                        <Image src="/logo.png" alt="ppgenerator logo" width={25} height={25} />
                    </span>
                </a>
            </footer>
            <ToastContainer />
        </div >
    )
}

export default AboutG