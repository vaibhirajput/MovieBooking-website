import React from 'react'
import Footer from '../../common/footer/Footer';
// import { useState } from 'react'
import Header from '../../common/header/Header'
import Movielist from '../../common/movielist/Movielist';
import Upmovies from '../../common/upcomingMovies/Upmovies';
import '../home/Home.css'

function Home() {
  
  return (
    <>
    <Header/>
    <Upmovies/>
    <Movielist/>
     <Footer/>
    </>
  )
}

export default Home