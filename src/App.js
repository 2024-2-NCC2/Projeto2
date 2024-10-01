import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Ferramentas from './pages/Ferramentas';
import Contato from './pages/Contato';


function App() {
  return (
<Router>
  <GlobalStyles />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/ferramentas' element={<Ferramentas/>}/>
    <Route path='/contato' element={<Contato/>}/>
  </Routes>
</Router>
  );
}

export default App;
