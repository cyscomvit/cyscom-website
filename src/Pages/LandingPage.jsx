import React from 'react'
import Sample from '../Components/Sample'
import { Helmet } from 'react-helmet-async'

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>CYSCOM</title>
      </Helmet>

      {/* Your code goes here */}

      <Sample />
    </div>
  )
}

export default LandingPage
