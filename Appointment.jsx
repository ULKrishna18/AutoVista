import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Appoint from '../components/Appointment'

const Appointment = () => {

    return (
      <div className='home'>
        <Navbar/>
        <Appoint/>
        <Footer/>
      </div>
    )
  }

export default Appointment;