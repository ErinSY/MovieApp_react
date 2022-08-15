import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Pages from './Routes/Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies/:hihi' element={<Pages />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
