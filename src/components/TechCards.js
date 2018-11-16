import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import logos from '../data/techData'

const TechCards = () => (
    logos.map((logo, i) => {
        return (
            <div className='image-group' key={i}>
            <Header as='h2'>{logo.name}</Header>
            <Image 
                className='image' 
                src={logo.img} 
                alt={logo.alt}
            />
            </div>
        )
    })
)

export default TechCards

