import React from 'react'

import About from './About'
import Video from '../components/Video'
import Collection from '../components/Collection'
import Forever from '../components/Forever'
import CarModel from '../components/CarModel'

const Home = () => {
  return (
    <div>
       
        <CarModel/>
        <About/>
        <Video/>
        <Collection/>
        <Forever/>
    </div>
  )
}

export default Home