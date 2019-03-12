import React from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import NavSideBar from "./components/NavSideBar"
import { Responsive } from "semantic-ui-react"
import ParallaxContent from "./components/ParallaxContent"
import ScrollButton from "./components/ScrollButton"

const App = () => (
  <div className="main">
    <Responsive minWidth={768}>
      <NavBar />
      <ParallaxContent />
    </Responsive>
    <Responsive maxWidth={767}>
      <NavSideBar />
    </Responsive>
    <ScrollButton scrollStepInPx="150" delayInMs="10.66" />
  </div>
)
export default App
