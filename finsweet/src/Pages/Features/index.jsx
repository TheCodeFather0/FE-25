import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../Components/Banner'

const Features = () => {
  return (
    <div>
       <Banner
        title="All the features you need"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt. View our work View Pricing"
        image="/FeatureHeroIllustration.svg"
        button={
            <Link className="ourWorkBtn" to="/">
              View Pricing
            </Link>
          }
      />
    </div>
  )
}

export default Features