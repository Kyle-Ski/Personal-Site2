import React, { Component } from 'react'
import { Button, Header, Image, Menu, Segment, Sidebar, Icon, Sticky } from 'semantic-ui-react'
import Cards from './Cards'
import ParallaxTest from './ParallaxTest'

const style ={
    card: {
        width: '100vw'
    },
    menu: {
        float: 'left'
    }, 
    side: {
      transform: 'none'
    }
}
    
class NavSideBar extends Component {
    
    state = { 
        visible: false
    }
    
    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    handleToggle = () => this.setState({ active: !this.state.active })


    render() {
        const { visible } = this.state
        return (
            <div>
                
                <Sidebar.Pushable style={style.side} as={Segment}>
                <Button color='black' style={style.card} onClick={this.state.visible ? this.handleHideClick : this.handleShowClick}>
                    <Icon style={style.menu} name='bars' />
                </Button>
                <Sidebar
                    as={Menu}
                    direction='top'
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='wide'
                    position='fixed'  
                >
                    <Menu.Item as='a' href='#about-me'>
                    <Icon name='home' />
                    About Me
                    </Menu.Item>
                    <Menu.Item as='a' href='#skills'>
                    <Icon name='gamepad' />
                    Skills
                    </Menu.Item>
                    <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                    </Menu.Item>
                    
                    <Menu.Item disabled={!visible} onClick={this.handleHideClick}>
                    <Icon name='angle double up' />
                </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={visible}>
                    <ParallaxTest />
                </Sidebar.Pusher>
                </Sidebar.Pushable>
                </div>
        )
    }
}

export default NavSideBar

