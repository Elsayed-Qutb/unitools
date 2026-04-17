import React from 'react'
import Header from '../components/Header'
import Sectionone from '../components/Sectionone'
import BrowseCategories from '../components/BrowseCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import Createe from '../components/Createe'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Sectionone></Sectionone>
      <BrowseCategories></BrowseCategories>
      <FeaturedProducts></FeaturedProducts>
      <Createe></Createe>
      <Footer></Footer>
    </div>
  )
}
