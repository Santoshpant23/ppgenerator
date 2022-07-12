import React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NextSeo } from 'next-seo';
import Link from 'next/link';





const appgenerated = () => {
    const router = useRouter();
    const query = router.query;
    const compname = query.compname;
    const appname = query.namee;
    const contactinfo = query.contact;
    const cookies = query.cookies;
    const ads = query.ads;
    const type = query.type;
    const owner = query.owner;
    const developer = query.developer;
    const country = query.country;
    const os = query.os;
    const customId = "ThisisId"

    setTimeout(() => {
        toast.success("Generated", {
            position: "top-center",
            toastId: customId
        })
    }, 100);

    const copyText = `
<h1>   Privacy Policy </h1>

<h2>   Introduction </h2>

<p> Our privacy policy will help you understand what information we collect at ${compname}, how ${compname} uses it, and what choices you have. {compname} built the All India Pin Codes  app as a ${type}. This SERVICE is provided by ${compname} at no cost and is intended for use as is. If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. </p> <br />

<p> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible in our website, unless otherwise defined in this Privacy Policy. </p> <br />



<h2>  Information Collection and Use </h2>

<p>  For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to users name, email address, gender, location, pictures. The information that we request will be retained by us and used as described in this privacy policy. </p> <br />

<p>  The app does use third party services that may collect information used to identify you. </p>



<h2>   Cookies </h2>

<p>   Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your devices’s internal memory. </p> <br />



<p>  This Services ${cookies == "yes" ? "uses" : "does not"} uses these “cookies” explicitly.  You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. </p>



<h2>   Device Information </h2>

<p> We collect information from your device in some cases. The information will be utilized for the provision of better service and to prevent fraudulent acts. Additionally, such information will not include that which will identify the individual user. </p>



<h2>  Security </h2>

<p>  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. </p>



<h2>  Children’s Privacy </h2>

<p> This Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. </p>



<h2>  Changes to This Privacy Policy </h2>

<p>  We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page. </p>



<h2>  Contact Us </h2>

<p>  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. </p>

<h2>  Contact Information: </h2>

<p>  Email: ${contactinfo} </p>
    `;
    const copyToClipboardText = () => {


        toast.success("HTML Copied", {
            position: "top-center"
        })
    }
    return (
        <div className={styles.container}>
            <NextSeo
                title="PPGenerator || Generated"

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

                    <h1>   Privacy Policy </h1>

                    <h2>   Introduction </h2>

                    <p> Our privacy policy will help you understand what information we collect at {compname}, how {compname} uses it, and what choices you have. {compname} built the All India Pin Codes  app as a {type}. This SERVICE is provided by {compname} at no cost and is intended for use as is. If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. </p> <br />

                    <p> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible in our website, unless otherwise defined in this Privacy Policy. </p> <br />



                    <h2>  Information Collection and Use </h2>

                    <p>  For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to users name, email address, gender, location, pictures. The information that we request will be retained by us and used as described in this privacy policy. </p> <br />

                    <p>  The app does use third party services that may collect information used to identify you. </p>



                    <h2>   Cookies </h2>

                    <p>   Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your devices’s internal memory. </p> <br />



                    <p>  This Services {cookies == "yes" ? "uses" : "does not"} uses these “cookies” explicitly.  You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. </p>



                    <h2>   Device Information </h2>

                    <p> We collect information from your device in some cases. The information will be utilized for the provision of better service and to prevent fraudulent acts. Additionally, such information will not include that which will identify the individual user. </p>



                    <h2>  Security </h2>

                    <p>  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. </p>



                    <h2>  Children’s Privacy </h2>

                    <p> This Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. </p>



                    <h2>  Changes to This Privacy Policy </h2>

                    <p>  We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page. </p>



                    <h2>  Contact Us </h2>

                    <p>  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. </p>

                    <h2>  Contact Information: </h2>

                    <p>  Email: {contactinfo} </p>

                </div>
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

export default appgenerated