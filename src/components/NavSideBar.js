import React, { Component } from 'react'
import { Button, Header, Image, Menu, Segment, Sidebar, Icon, Sticky } from 'semantic-ui-react'
import Cards from './Cards'

const style ={
    card: {
        width: '100vw'
        },
    menu: {
        float: 'left'
    }
}
    
class NavSideBar extends Component {
    
    state = { 
        visible: false,
        active: true
    }
    
    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    handleContextRef = contextRef => this.setState({ contextRef })
    handleToggle = () => this.setState({ active: !this.state.active })


    render() {
        const { visible, active, contextRef } = this.state
        return (
            <div>
            <div ref={this.handleContextRef}>
                <Sidebar.Pushable as={Segment}>
        <Sticky context={contextRef}>
                <Button color='black' style={style.card} onClick={this.handleShowClick}>
                    <Icon style={style.menu} name='bars' />
                </Button>
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
                    <Icon name='angle double left' />
                </Menu.Item>
                </Sidebar>
            </Sticky>
        
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
                </div>
        )
    }
}

export default NavSideBar