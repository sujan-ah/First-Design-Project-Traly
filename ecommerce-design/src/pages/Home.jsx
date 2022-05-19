import React from 'react'
import Banner from '../components/Banner'
import Deal from '../components/Deal'
import Feature from '../components/Feature'
import MiddleBanner from '../components/MiddleBanner'
import Topproducts from '../components/Topproducts'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Deal></Deal>
      <Topproducts></Topproducts>
      <MiddleBanner></MiddleBanner>
      <Feature></Feature>
    </>
  )
}

export default Home