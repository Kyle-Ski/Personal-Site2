import React from 'react'
import { Label, Image} from 'semantic-ui-react'
const bootstrap = {name : 'Bootstrap 3 & 4', img: '/img/Bootstrap-Logo.png', icon: 'tv', description: 'Front-End'}
const css = {name: 'CSS3', img: '/img/CSS3-Logo.png', icon: 'css3 alternate', description: 'Front-End'}
const git = {name: 'Git', img: '/img/Git-Logo.png', icon: 'github square', description: 'Front/Back-End'}
const heroku = {name: 'Heroku', img: '/img/Heroku-Logo.png', icon: 'tv', description: 'Back-End'}
const html = {name: 'HTML5', img: '/img/HTML5-Logo.png', icon: 'html5', description: 'Front-End'}
const javaScript= {name: 'JavaScript', img: '/img/JavaScript-Logo.jpg', icon: 'js square', description: 'Front/back'}
const knexJs = {name: 'Knex.js', img: '/img/KnexJs-Logo.png', icon: 'server', description: 'Back-End'}
const nodeJs = {name: 'Node.js', img: '/img/NodeJs-Logo.png', icon: 'server', description: 'Back-End'}
const postgre = {name: 'PostgreSQL', img: '/img/PostgreSQL-Logo.png', icon: 'server', description: 'Back-End'}
const reactL = {name: 'React', img: '/img/React-Logo.png', icon: 'react', description: 'Front-End'}
const rest = {name: 'RESTful API', img: '/img/RestAPI-Logo.png', icon: 'server', description: 'Back-End'}
const logos = [bootstrap, css, git, heroku, html, javaScript, knexJs, nodeJs, postgre, reactL, rest]

const style = {
    img: {
        backgroundColor: 'white'
    }, 
    extra: {
        borderColor: 'white'
    }
}

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

