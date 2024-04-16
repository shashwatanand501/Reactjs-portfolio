import React from 'react'
import './Project.css'
import Header from '../../Component/Header/Header'
import Card from '../../Component/Card/Card'

function Project() {
  return (
    <>
      <div className='Header_Pages'>
        <Header />

      </div>
      <div className='project_container'>
        <Card />
        <Card />
        <Card />
      </div></>
  )
}

export default Project
