import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/HomePage'
import MovieDetail from './Pages/MovieDetail'
import Search from './Pages/Search'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search?' element={<Search />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App
