import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';

function App() {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    )
              }
  export default App