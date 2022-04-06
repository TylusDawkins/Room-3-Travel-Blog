import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import LocationList from './components/Locations'
import Reviews from './components/Reviews'


const App = () => {
  
  return (
    <div className="App">
      <h3>ULTRAVEL Travel Blog</h3>
      <div className='Location-list'>
      </div>
      <Routes>
        <Route path='/' element={<LocationList />} />
        <Route path="/locations-list/:id" element={<Reviews />} />
      </Routes>
    </div>
  )
}

export default App