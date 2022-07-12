import React from 'react'
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NextSeo } from 'next-seo';
import Link from 'next/link';






const generated = (props) => {
    const router = useRouter();
    // router.replace('/about', undefined, { shallow: true });
    const query = router.query;
    const webname = query.namee;
    const weburl = query.url;
    const email = query.email;
    const category = query.category;
    const customId = "custom-id-yes";
    setTimeout(() => {
        toast.success("Generated", {
            position: "top-center",
            toastId: customId
        })
    }, 100);
    const copyText = `
<h2> Privacy Policy for ${webname} </h2> <br />

<p> At ${webname} , accessible from ${weburl}, one of our main priorities is the privacy of our visitors.This Privacy Policy document contains types of information that is collected and recorded by {webname} and how we use it. </p> <br />

<p>   If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at ${email} </p>

<h2>  Log Files </h2> <br />

<p>  ${webname} follows a standard procedure of using log files.These files log visitors when they visit websites.All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol "IP" addresses, browser type, Internet Service Provider "ISP", date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. </p> <br />

<h2>   Cookies and Web Beacons </h2> <br />

<p> Like any other website, ${webname} uses 'cookies'.These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. </p>

<h2>    Google DoubleClick DART Cookie </h2> <br />

<p>  Google is one of a third - party vendor on our site.It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to ${weburl} and other sites on the internet.However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – "https://policies.google.com/technologies/ads" </p>  <br />

<h2> Privacy Policies </h2> <br />

<p>  You may consult this list to find the Privacy Policy for each of the advertising partners of ${webname} . Our Privacy Policy was created with the help of the Privacy Policy Generator called ppgenerator. </p> <br />

<p>  Third - party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ${webname} , which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. </p> <br />

<p> Note that ${webname} has no access to or control over these cookies that are used by third - party advertisers. </p> <br />

<h2> Third Pary Privacy Policies </h2> <br />

<p>  ${webname} 's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here:  </p> <br />

<h3>  Privacy Policy Links. </h3> <br />

<p>  You can choose to disable cookies through your individual browser options.To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies? </p>  <br />

<h2>  Children's Information </h2> <br />

<p>  Another part of our priority is adding protection for children while using the internet.We encourage parents and guardians to observe, participate in, and / or monitor and guide their online activity. </p> <br />

<p>  ${webname} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records. </p> <br />

<h2> Online Privacy Policy Only </h2> <br />

<p>  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and / or collect in ${webname}.This policy is not applicable to any information collected offline or via channels other than this website. </p> <br />

<h2>  Consent </h2> <br />

<p>   By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. </p> <br />
`
    const copyToClipboardText = () => {


        toast.success("Text Copied", {
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

                    <div className={styles.styletxt}>

                        <h2> Privacy Policy for {webname} </h2> <br />

                        <p> At {webname} , accessible from {weburl}, one of our main priorities is the privacy of our visitors.This Privacy Policy document contains types of information that is collected and recorded by {webname} and how we use it. </p> <br />

                        <p>   If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at {email} </p>

                        <h2>  Log Files </h2> <br />

                        <p>  {webname} follows a standard procedure of using log files.These files log visitors when they visit websites.All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol "IP" addresses, browser type, Internet Service Provider "ISP", date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. </p> <br />

                        <h2>   Cookies and Web Beacons </h2> <br />

                        <p> Like any other website, {webname} uses 'cookies'.These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. </p>

                        <h2>    Google DoubleClick DART Cookie </h2> <br />

                        <p>  Google is one of a third - party vendor on our site.It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to {weburl} and other sites on the internet.However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – "https://policies.google.com/technologies/ads" </p>  <br />

                        <h2> Privacy Policies </h2> <br />

                        <p>  You may consult this list to find the Privacy Policy for each of the advertising partners of {webname} . Our Privacy Policy was created with the help of the Privacy Policy Generator called ppgenerator. </p> <br />

                        <p>  Third - party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on {webname} , which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. </p> <br />

                        <p> Note that {webname} has no access to or control over these cookies that are used by third - party advertisers. </p> <br />

                        <h2> Third Pary Privacy Policies </h2> <br />

                        <p>  {webname} 's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here:  </p> <br />

                        <h3>  Privacy Policy Links. </h3> <br />

                        <p>  You can choose to disable cookies through your individual browser options.To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies? </p>  <br />

                        <h2>  Children's Information </h2> <br />

                        <p>  Another part of our priority is adding protection for children while using the internet.We encourage parents and guardians to observe, participate in, and / or monitor and guide their online activity. </p> <br />

                        <p>  {webname} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records. </p> <br />

                        <h2> Online Privacy Policy Only </h2> <br />

                        <p>  This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and / or collect in {webname}.This policy is not applicable to any information collected offline or via channels other than this website. </p> <br />

                        <h2>  Consent </h2> <br />

                        <p>   By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. </p> <br />


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

export default generated