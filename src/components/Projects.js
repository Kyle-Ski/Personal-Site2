import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const beers = {creation: 'October 2018', img: '/img/Beers.png', name: 'Full CRUD Beer Review App', url: 'https://warm-garden-50264.herokuapp.com/', gitHub: 'https://github.com/Kyle-Ski/College-database-Front-End', description: 'A full CRUD front end React app that uses Semantic-Ui. It connects to a back end PostgreSQL database and Knex RESTful server. Technologies: Semantic-Ui React, React, PostgreSQL, Knex.js.'}
const bookStore = {creation: 'September 2018', img: '/img/Bookstore.png', name: 'React Bookstore', url: 'http://greedy-drink.surge.sh/', gitHub: 'https://github.com/Kyle-Ski/Bookstore', description: 'My first React App. Created to work like a shopping cart for a bookstore with search functionality. Technologies: React, CSS, JavaScript, HTML'}
const expressServer = {creation: 'October 2018', img: '/img/ExpressServer.png', name: 'RESTful Express Server', url: 'https://protected-headland-83497.herokuapp.com/', gitHub: 'https://github.com/svphan1/express-server-mastery', description: 'An Express server created using RESTful programming, MCV architecture, and pair programming. Technologies: Express.js, JavaScript'}
const inbox = {creation: 'September 2018', img: '/img/Inbox.png', name: 'React Inbox', url: 'https://github.com/Kyle-Ski/react-inbox', gitHub: 'https://github.com/Kyle-Ski/react-inbox', description: 'A React app created to look like an email inbox. This app was my first attempt at making patch, post and delete requests to an API. Technologies: Bootstrap, JavaScript, React, HTML, CSS'}
const pixle = {creation: 'August 2018', img: '/img/PixleArt.png', name: 'Pixle Art Maker', url: 'http://lonely-cover.surge.sh/', gitHub: 'https://github.com/Kyle-Ski/pixel-art-maker', description: 'My introduction to DOM manipulation and Event Listeners. Technologies: JavaScript, HTML, and CSS.'}

const projects = [beers, expressServer, inbox, bookStore, pixle]

const style = {
    image: {
        minHeight: '150px'
    }
}
const Projects = () => (
    projects.map((project ,i) => {
        return(
        <Card className='hover' key={i}>
            <Image src={project.img} style={style.image}/>
            <Card.Content>
                <Card.Header>{project.name}</Card.Header>
                <Card.Meta>{project.creation}</Card.Meta>
                <Card.Description>{project.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={project.url}>
                    <Icon name='world' />
                    Live Url
                </a>
            </Card.Content>
            <Card.Content extra>
                <a href={project.gitHub}>
                    <Icon name='github' />
                    GitHub Repo
                </a>        
            </Card.Content>
      </Card>
        )
    })
    )

export default Projects