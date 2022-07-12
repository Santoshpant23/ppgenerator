import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';
// import SEO from '../next-seo.config';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          url: 'https://www.ppgenerator.com/',
          title: 'PPGenerator',
          description: 'PPGenerator',
          images: [
            {
              url: 'https://drive.google.com/file/d/1Wm9gSpmlDcN4FAR2BneobdiqXexCCpTX/view?usp=sharing',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/png',
            }
          ]
        }}
        twitter={{
          handle: '@iamsantoshpant',
          site: '@ppgegerator',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
