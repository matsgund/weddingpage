import './App.css'
import HomePage from './pages/homePage';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
    </BrowserRouter> 
  )
}

export default App
