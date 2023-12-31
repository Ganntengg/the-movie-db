import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/HomePage'
import MovieDetail from './Pages/MovieDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/popular' element={} /> */}
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default App
