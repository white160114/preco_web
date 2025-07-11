import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ConnectPage from './pages/ConnectPage';
import ExplanationPage from './pages/ExplanationPage';
import OperationPage from './pages/OperationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/ConnectPage' element={<ConnectPage />}></Route>
        <Route path='/ExplanationPage' element={<ExplanationPage />}></Route>
        <Route path='/OperationPage' element={<OperationPage />}></Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
