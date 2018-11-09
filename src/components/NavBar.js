import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
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
    <div className="ui top fixed menu">
        <Segment inverted style={style.nav}>
            <Menu inverted pointing secondary>
            <Dropdown inverted item text='Categories'>
            <Dropdown.Menu>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Automotive</Dropdown.Item>
                <Dropdown.Item>Home</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>            
            <Menu.Item
                name='About Me'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
                href='#about-me'
            />
            <Menu.Item
                name='Skills'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
                href='#skills'
            />
            </Menu>
        </Segment>
    </div>
        )
    }
}
export default NavBar