import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ConnectPage from './pages/ConnectPage';
import ExplanationPage from './pages/ExplanationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/ConnectPage' element={<ConnectPage />}></Route>
        <Route path='/ExplanationPage' element={<ExplanationPage />}></Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
