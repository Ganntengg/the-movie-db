import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MovieDetail from './Pages/MovieDetail'
import Search from './Pages/Search'
import SeriesDetail from './Pages/SeriesDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search?' element={<Search />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App
