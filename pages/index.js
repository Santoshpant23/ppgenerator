import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo';


export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>PPGenerator || Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head> */}
      <NextSeo
        title="PPGenerator || Home"
        description="Privacy Policy generator used to generate policy pages for app and website"
        canonical='https://www.ppgenerator.com'
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
        <h1 className={styles.title}>


          <span className={styles.titlemain}>PP</span>Generator

        </h1>

        <p className={styles.description}>
          Generate content for your various pages

        </p>

        <div className={styles.grid}>
          <a href="/generate/website-privacy-generator" className={styles.card} target="_blank">
            <h2>Privacy Policy for Websites &rarr;</h2>
            <p>Privacy policy for websites:) and get fast adsence approval.</p>
          </a>

          <a href="/generate/app-policy-generator" className={styles.card} target="_blank">
            <h2>Privacy Policy for Apps &rarr;</h2>
            <p>Make quick privacy policy for your app to be published in play store.</p>
          </a>

          <a
            href="/generate/about-us-generator"
            className={styles.card}
            target="_blank"
          >
            <h2>About Us Generator &rarr;</h2>
            <p>Generate professional About Us page for your website.</p>
          </a>

          <a
            href="/generate/dmca-generator"
            className={styles.card}
            target="_blank"
          >
            <h2>DMCA Generator &rarr;</h2>
            <p>
              Instantly make DMCA for your website and get adsence approval quickly.
            </p>
          </a>
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
    </div >
  )
}