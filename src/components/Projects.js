import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import projects from '../data/projectsData'

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
                    <a href={project.url} target='_blank'>
                        <Icon name='world' size='large'/>
                        Live Url
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a href={project.gitHub} target='_blank'>
                        <Icon name='github' size='large'/>
                        GitHub Repo
                    </a>        
                </Card.Content>
            </Card>
        )
    })
)

export default Projects