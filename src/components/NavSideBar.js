import React, { Component } from 'react'
import { Button, Header, Image, Menu, Segment, Sidebar, Icon, Sticky } from 'semantic-ui-react'
import Cards from './Cards'
import ParallaxTest from '../ParallaxTest'

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
        visible: false
    }
    
    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    handleToggle = () => this.setState({ active: !this.state.active })


    render() {
        const { visible, contexRef } = this.state
        return (
            <div>
            <div class="ui top fixed menu">
                <Button color='black' style={style.card} onClick={this.handleShowClick}>
                    <Icon style={style.menu} name='bars' />
                </Button>
                
                </div>
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
                    <Icon name='angle double left' />
                </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={visible}>
                    <Segment basic>
                    <ParallaxTest />
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
                </div>
        )
    }
}

export default NavSideBar

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
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
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }

  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible })

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
        <Checkbox checked={dimmed} label='Dim Page' onChange={this.handleDimmedChange} toggle />

        <Header as='h5'>Direction</Header>
        <Button.Group>
          <Button active={direction === 'left'} onClick={this.handleDirectionChange('left')}>
            Left
          </Button>
          <Button active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
            Right
          </Button>
          <Button active={direction === 'top'} onClick={this.handleDirectionChange('top')}>
            Top
          </Button>
          <Button active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
            Bottom
          </Button>
        </Button.Group>

        <Header as='h5'>All Direction Animations</Header>
        <Button onClick={this.handleAnimationChange('overlay')}>Overlay</Button>
        <Button onClick={this.handleAnimationChange('push')}>Push</Button>
        <Button onClick={this.handleAnimationChange('scale down')}>Scale Down</Button>

        <Header as='h5'>Vertical-Only Animations</Header>
        <Button disabled={vertical} onClick={this.handleAnimationChange('uncover')}>
          Uncover
        </Button>
        <Button disabled={vertical} onClick={this.handleAnimationChange('slide along')}>
          Slide Along
        </Button>
        <Button disabled={vertical} onClick={this.handleAnimationChange('slide out')}>
          Slide Out
        </Button>

        <Sidebar.Pushable as={Segment}>
          {vertical ? (
            <HorizontalSidebar animation={animation} direction={direction} visible={visible} />
          ) : null}
          {vertical ? null : (
            <VerticalSidebar animation={animation} direction={direction} visible={visible} />
          )}

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}