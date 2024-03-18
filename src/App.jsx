import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Aitutor from './pages/Aitutor';
import Login from './pages/Login';
import AitutorHindi from './pages/AitutorHindi';

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/ai-tutor' element={<Aitutor />} />
        <Route exact path='/ai-tutor/hindi' element={<AitutorHindi />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
