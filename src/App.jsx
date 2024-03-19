import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Aitutor from './pages/Aitutor';
import Login from './pages/Login';
import AitutorHindi from './pages/AitutorHindi';
import Pathway from './pages/Pathway';
import Courseworth from './pages/Courseworth';
import Courseguide from './pages/Courseguide';
import PrivateRoute from './components/routes/PrivateRoute';
import NotFound from './pages/NotFound';
import AppContext from './components/utils/context';

function App() {
  

  return (
    <>  
      <AppContext>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route exact path='/ai-tutor' element={
          <PrivateRoute>
              <Aitutor />
          </PrivateRoute>
          } />
        <Route exact path='/ai-tutor/hindi' element={<AitutorHindi />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/pathway' element={<Pathway />} />
        <Route exact path='/course-worth' element={<Courseworth />} />
        <Route exact path='/course-guider' element={<Courseguide />} />
        <Route exact path='*' element={<NotFound />} />

      </Routes>
      </AppContext>
    </>
  )
}

export default App
