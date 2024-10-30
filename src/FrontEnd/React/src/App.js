import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Mentoria from './pages/Mentoria';
import Cursos from './pages/Cursos';
import Networking from './pages/Networking';
import Profile from './pages/Profile';


function App() {
  return (
<Router>
  <GlobalStyles />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/contato' element={<Contato/>}/>
    <Route path='/cursos' element={<Cursos/>}/>
    <Route path='/networking' element={<Networking/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/mentoria' element={<Mentoria/>}/>
  </Routes>
</Router>
  );
}

export default App;
