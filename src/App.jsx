
import './App.css'
import Header from './common/header/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Pages from './pages/Pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       
      </div>

      <Routes>
        <Route path="/" element={ <Pages /> } />
      </Routes>
    </Router>
  )
}

export default App;
