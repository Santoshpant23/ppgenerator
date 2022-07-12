import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from 'next-seo';





const Dmca = () => {
    // const router = useRouter();
    const [compname, setCompname] = useState("company");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");

    const customId = "custom-id-yes";


    const handleClick = async () => {
        // toast("Wow so easy!");
        if (website == "" || email == "") {
            toast.warn("All Fields are required", {
                position: "top-center",
                toastId: customId

            });
        }
        else {
            await toast.success("Generated", {
                position: "top-center"
            })

        }
    }

    return (
        <div className={styles.container}>
            {/* <Head>
                <title>Generate | DMCA</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <NextSeo
                title="Generate || DMCA"
                description="Generate DMCA for any websites for free and with one click, DMCA generator free."

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
                            <input required className={styles.input} type="text" id="first" name="first" placeholder='Enter here...'
                                onChange={(event) => {
                                    setWebsite(event.target.value);
                                }}

                            />
                        </div>

                        <div className={styles.formfields}>

                            <label className={styles.label} >Email:</label>
                            <input required className={styles.input} type="text" id="first" name="first" placeholder='Enter here...'
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}

                            />
                        </div>
                        <br />

                        <button type="submit" className={styles.btn} onClick={handleClick}>
                            <Link
                                href={{
                                    pathname: website == "" ? "" : "/generate/dmca-generated",
                                    query: { email, website },
                                }}
                            >Generate</Link>
                        </button>
                    </form >
                </div>
            </main >
            <ToastContainer />
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
        </div >
    )
}

export default Dmca