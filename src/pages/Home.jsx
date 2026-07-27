import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Introduction from '../components/home/Introduction'
import EducationApproach from '../components/home/EducationApproach'
import RecentEvents from '../components/home/RecentEvents'
import SchoolLifeGallery from '../components/home/SchoolLifeGallery'
import Footer from '../components/layout/Footer'


function Home() {
  return (
    <>
     <Navbar></Navbar>
     <main>
        <Hero/>
        <Introduction/>
        <EducationApproach/>
        <RecentEvents/>
        <SchoolLifeGallery/>
     </main>
     <Footer/>
    </>
  )
}

export default Home