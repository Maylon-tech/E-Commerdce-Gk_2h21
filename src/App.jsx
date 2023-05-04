import React,{ useState } from 'react'
import './App.css'
import Header from './common/header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Pages from './pages/Pages'

const App = () => {
  // Step 1: fetch data from database
  const [cartItem, setCartItem] = useState([])
  
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={ <Pages /> } />
      </Routes>
    </Router>
  )
}

export default App;
