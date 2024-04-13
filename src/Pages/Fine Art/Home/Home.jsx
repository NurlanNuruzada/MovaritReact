import React from 'react'
import Section1 from './HomePageComponents/Section1/Section1'
import Section2 from './HomePageComponents/Section2/Section2'
import TrendingArtworksContainer from './HomePageComponents/TrendingArtworks/TrendingArtworksContainer'
import CollectionSection from './HomePageComponents/CollectionSection/CollectionSection'
import TrendingCollection from './HomePageComponents/NewCollection/NewCollection'
import LetsPlay from './HomePageComponents/LetsPlay/LetsPlay'
import Styles from './Home.module.scss'
export default function Home() {
  return (
    <div className={Styles.MainContainerHome}>
      <Section1 />
      <div className={Styles.Component}>
        <Section2 />
        <TrendingArtworksContainer />
        <CollectionSection />
        <TrendingCollection />
        <LetsPlay />
      </div>
    </div>
  )
}
