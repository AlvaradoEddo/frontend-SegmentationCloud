import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="CloudDetection Page Grupo 2"
        content="Por favor ingresar una imagen satelital para saber si tiene nubes."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
