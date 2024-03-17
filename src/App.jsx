import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Aitutor from './pages/Aitutor';

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/ai-tutor' element={<Aitutor />} />
      </Routes>
    </>
  )
}

export default App
