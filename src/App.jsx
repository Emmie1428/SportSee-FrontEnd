


import { BrowserRouter } from "react-router-dom"
import Router from "./Composants/Router"
import Header from "./Composants/Header/Header"
import VerticalMenu from "./Composants/VerticalMenu/VerticalMenu"
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <VerticalMenu />
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
