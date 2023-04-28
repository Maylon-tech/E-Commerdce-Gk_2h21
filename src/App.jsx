
import './App.css'
import Header from './common/header/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
      </div>

      <Routes>
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App;
