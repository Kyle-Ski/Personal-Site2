import React, { Component } from 'react'
import { Button, Header, Image, Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import Cards from './Cards'

const style ={
    card: {
        padding: 'vw'
        }
}
    
class NavSideBar extends Component {
    
    state = { visible: false }
    
    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    
    render() {
        const { visible } = this.state
    
        return (
            <div>
                <Button disabled={visible} onClick={this.handleShowClick}>
                    Show sidebar
                </Button>
        
                <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                    </Menu.Item>
                    <Menu.Item disabled={!visible} onClick={this.handleHideClick}>
                    Hide sidebar
                </Menu.Item>
                </Sidebar>
        
                <Sidebar.Pusher dimmed={visible}>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />                   
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default NavSideBar