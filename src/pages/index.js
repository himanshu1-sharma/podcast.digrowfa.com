import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/footer/Footer'
import Header from './Home/Header'
import StartPodcast from './Home/StartPodcast'
import About from './Home/About'
import HowPodcasting from './Home/HowPodcasting'
import CallToAction from './Home/CallToAction'
import UpcommingPodcast from './Home/UpcommingPodcast'
import ContactForm from './Home/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Digrowfa for Podcasters</title>
        <meta name="description" content="World's 1st Complete Digital Growth Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <About />

      <HowPodcasting />
      {/* <StartPodcast /> */}
      <UpcommingPodcast />

      <CallToAction />
      <ContactForm />
      {/* <Footer /> */}
    </>
  )
}
