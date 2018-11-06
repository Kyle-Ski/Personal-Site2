import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import ParallaxTest from '../ParallaxTest'
const style = {
    nav: {
        width: '100vw',
    }
}

class NavBar extends Component {
state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
    <div class="ui top fixed menu">
        <Segment inverted style={style.nav}>
            <Menu inverted pointing secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
            />
            </Menu>
        </Segment>
    </div>
        )
    }
}
export default NavBar