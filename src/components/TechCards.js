import React from 'react'
import { Image } from 'semantic-ui-react'
import logos from '../data/techData'

const TechCards = () => (
    logos.map((logo, i) => {
        return (
            <Image 
                className='image' 
                key={i} 
                src={logo.img} 
                alt={logo.name}
            />
        )
    })
)

export default TechCards

