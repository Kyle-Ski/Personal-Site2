import React, { Component } from "react"
import { Menu, Segment, Dropdown, Icon } from "semantic-ui-react"
const style = {
  nav: {
    width: "100vw",
    borderBottom: "solid darkgreen 6px"
  },
  name: {
    fontSize: "4vh"
  }
}

class NavBar extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="ui top fixed menu">
        <Segment inverted style={style.nav}>
          <Menu massive inverted>
            <Menu.Item
              name="About Me"
              active={activeItem === "About Me"}
              onClick={this.handleItemClick}
              href="#about-me"
            />
            <Menu.Item
              name="Skills"
              active={activeItem === "Skills"}
              onClick={this.handleItemClick}
              href="#skills"
            />
            <Menu.Item
              name="Projects"
              active={activeItem === "Projects"}
              onClick={this.handleItemClick}
              href="#projects"
            />
            <Menu.Item
              name="Resume"
              active={activeItem === "Resume"}
              onClick={this.handleItemClick}
              href="#resume"
            />
            <Dropdown inverted item text="Contact">
              <Dropdown.Menu>
                <Dropdown.Item href="https://github.com/Kyle-Ski">
                  <Icon name="github" />
                  GitHub
                </Dropdown.Item>
                <Dropdown.Item href="mailto:skiroyjenkins@gmail.com">
                  <Icon name="mail" />
                  skiroyjenkins@gmail.com
                </Dropdown.Item>
                <Dropdown.Item href="https://www.linkedin.com/in/kyle-czajkowski/">
                  <Icon name="linkedin" />
                  LinkedIn
                </Dropdown.Item>
                <Dropdown.Item href="tel: +1-303-374-4256">
                  <Icon name="phone" />
                  Cell Phone
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              style={style.name}
              position="right"
              name="Kyle Czajkowski"
            />
          </Menu>
        </Segment>
      </div>
    )
  }
}

export default NavBar
