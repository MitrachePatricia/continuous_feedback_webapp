
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Register from './Pages/Register'
import MainPage from './Pages/MainPage';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="main" element={<MainPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
