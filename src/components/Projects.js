import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const beers = {creation: 'October 2018', img: '/img/Beers.png', name: 'Full CRUD Beer Review App', url: 'https://warm-garden-50264.herokuapp.com/', gitHub: 'https://github.com/Kyle-Ski/College-database-Front-End', description: 'A full CRUD front end React app that uses Semantic-Ui. It connects to a back end PostgreSQL database and Knex RESTful server'}
const projects = [beers]
const Projects = () => (
    projects.map((project ,i) => {
        return(
        <Card key={i}>
            <Image src={project.img} />
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