import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Mentoria from './pages/Mentoria';
import Cursos from './pages/Cursos';
import Networking from './pages/Networking';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';



function App() {
  return (
<Router>
  <GlobalStyles />
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
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
