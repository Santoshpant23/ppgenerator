import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from 'next-seo';




const appgenerated = () => {
    const router = useRouter();
    const customId = "custom-id-yes";

    const query = router.query;
    const email = query.email;
    const website = query.website;

    var text = `<h2>DMCA</h2>
<p>If we, ${website}, have added some content that belong to you or your organization by mistake, We are sorry for that.We apologize for that and assure you that this wont be repeated in future.If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof(URL or Legal Document) at ${email}</p>
    
<p>I assure you that, I will remove the infringing content Within 48 Hours. </p>`;


    const copyText = `DMCA

If we,${website} , have added some content that belong to you or your organization by mistake, We are sorry for that. We apologize for that and assure you that this wont be repeated in future. If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof (URL or Legal Document) at ${email}

I assure you that, I will remove the infringing content Within 48 Hours.`;

    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    }
    const copyToClipboardHtml = () => {

        alert("HTML Copied");
    }
    const copyToClipboardText = () => {


        alert("Text Copied");
    }
    setTimeout(() => {

        toast.success("Generated", {
            position: "top-center",
            toastId: customId
        });
    }, 100);




    return (
        <div className={styles.container}>
            <NextSeo
                title="PPGenerator || Generated"

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



                <div className={styles.innerdiv} >


                    <h2>DMCA</h2>

                    <div name='copydiv' id='divvalue'>
                        <p className={styles.para}>
                            If we, {website}, have added some content that belong to you or your organization by mistake, We are sorry for that. We apologize for that and assure you that this wont be repeated in future. If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof (URL or Legal Document) at {email}

                        </p>

                        <p className={styles.para}> I assure you that, I will remove the infringing content Within 48 Hours. </p>
                    </div>
                    <br />

                    <br />

                    <CopyToClipboard text={copyText} >

                        <button className={styles.btn} onClick={copyToClipboardText}  >Copy Text</button>
                    </CopyToClipboard>
                    <br /> <br />

                    <textarea name="" id="" cols="30" rows="10" className={styles.textarea}
                        value={text}
                    >




                    </textarea>
                    <br /> <br />
                    <CopyToClipboard text={text}>

                        <button className={styles.btn} onClick={copyToClipboardHtml}>Copy HTML</button>

                    </CopyToClipboard>
                    <br />
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
                <ToastContainer />
            </footer>
        </div >
    )
}

export default appgenerated