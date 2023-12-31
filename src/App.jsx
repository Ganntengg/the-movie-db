import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/HomePage'

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/popular' element={} /> */}
      </Routes>
    </Router>
  )
}

export default App
