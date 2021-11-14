import {Routes, Route} from 'react-router-dom'
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';


function App() {
  /*React Fragment sayesinde boş bir tag açarak tek bir parent element varmış gibi davranmasını sağlayabiliriz*/
  return (
    <>
      <Toolbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
