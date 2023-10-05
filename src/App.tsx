import './App.css'
import HomePage from './pages/homePage';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { ScrollProvider } from './context/scrollContext';

function App() {

  return (
    <BrowserRouter>
      <ScrollProvider>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </ScrollProvider>
    </BrowserRouter> 
  )
}

export default App
