import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { About } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ContactDetails } from '@/components/ContactDetails'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Master Car Consulting</title>
        <meta
          name="description"
          content="We provide the best car consulting services in the world."
        />
      </Head>
      <Header />
      <main>
        <ContactDetails />
      </main>
      <Footer />
    </>
  )
}
