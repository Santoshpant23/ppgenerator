import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router, { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Image from 'next/image'
import { NextSeo } from 'next-seo';
import Link from 'next/link';







const Aboutgenerated = () => {
    const router = useRouter();
    const query = router.query;
    const name = query.namee;
    const category = query.category;
    const mail = query.email;

    const customId = "itscustomId";
    setTimeout(() => {
        toast.success("Generated", {
            position: "top-center",
            toastId: customId
        })
    }, 110);
    const copyText = `
<h1>About Us for ${name}</h1>
<p>Here in this blog, we provide educational content. We offer various problems with their solutions related to science and maths. We are actively working on improving this platform from your feedback. Feel free to give your feedback. We aim on providing quality education to all students for free.  </p> <br />

<p> If you have any queries regarding Site, Advertisement, and any other issue, please feel free to contact me at ${mail} </p> <br />
`;
    const copyToClipboardText = () => {


        toast.success("Text Copied", {
            position: "top-center"
        })
    }
    return (
        <div className={styles.container}>
            <NextSeo
                title="PPGenerator | Generated"


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

                    <div className={styles.styletxt}>

                        <h1>About Us for {name}</h1>
                        <p>Here in this blog, we provide educational content. We offer various problems with their solutions related to science and maths. We are actively working on improving this platform from your feedback. Feel free to give your feedback. We aim on providing quality education to all students for free.  </p> <br />

                        <p> If you have any queries regarding Site, Advertisement, and any other issue, please feel free to contact me at {mail} </p> <br />


                    </div>
                </div >
                <CopyToClipboard text={copyText} >

                    <button className={styles.btn} onClick={copyToClipboardText}  >Copy HTML</button>
                </CopyToClipboard>


            </main>
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
        </div>
    )
}

export default Aboutgenerated