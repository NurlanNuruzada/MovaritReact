import React from 'react'
import Section1 from './HomePageComponents/Section1/Section1'
import Section2 from './HomePageComponents/Section2/Section2'
import TrendingArtworksContainer from './HomePageComponents/TrendingArtworks/TrendingArtworksContainer'
import CollectionSection from './HomePageComponents/CollectionSection/CollectionSection'
import TrendingCollection from './HomePageComponents/NewCollection/NewCollection'
import LetsPlay from './HomePageComponents/LetsPlay/LetsPlay'
import LatestBlogs from './HomePageComponents/LatestBlogs/LatestBlogs'
import Testimonials from './HomePageComponents/Testimonials/Testimonials'
import Light from './HomeLight.module.scss'
import Dark from './HomeDark.module.scss'

export default function Home({ theme }) {
  const currentTheme = theme === 'dark' ? Dark : Light;
  return (
    <div className={currentTheme.MainContainerHome}>
      <Section1 theme={theme} />
      <div className={currentTheme.Component}>
        <Section2 theme={theme} />
        <TrendingArtworksContainer theme={theme} />
        <CollectionSection theme={theme} />
        <TrendingCollection theme={theme} />
        <LetsPlay theme={theme} />
        <LatestBlogs theme={theme} />
        <Testimonials theme={theme} />
      </div>
    </div>
  )
}
