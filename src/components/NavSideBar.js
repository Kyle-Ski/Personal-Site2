import React, { Component } from 'react'
import { Button, Header, Image, Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import ParallaxContent from './ParallaxContent'

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
                    <Icon name='vcard' />
                    About Me
                    </Menu.Item>
                    <Menu.Item as='a' href='#skills'>
                    <Icon name='js square' />
                    Skills
                    </Menu.Item>
                    <Menu.Item as='a' href='#projects'>
                    <Icon name='code' />
                    Projects
                    </Menu.Item>
                    <Menu.Item as='a' href='https://www.linkedin.com/in/kyle-czajkowski/'>
                    <Icon name='linkedin' />
                    LinkedIn
                    </Menu.Item>
                    <Menu.Item as='a' href='https://github.com/Kyle-Ski'>
                    <Icon name='github' />
                    GitHub
                    </Menu.Item>
                    <Menu.Item as='a' href="mailto:skiroyjenkins@gmail.com">
                    <Icon name='mail' />
                    Email
                    </Menu.Item>
                    <Menu.Item as='a' href="tel: +1-303-374-4256">
                    <Icon name='phone' />
                    Cell Phone
                    </Menu.Item>
                    
                    <Menu.Item disabled={!visible} onClick={this.handleHideClick}>
                    <Icon name='angle double up' />
                </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={visible}>
                    <ParallaxContent />
                </Sidebar.Pusher>
                </Sidebar.Pushable>
                </div>
        )
    }
}

export default NavSideBar

