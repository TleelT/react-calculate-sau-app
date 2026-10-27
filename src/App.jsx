import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Bmi from './pages/Bmi'
import Bnr from './pages/Bnr'
import Car from './pages/Car'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/bmr" element={<Bnr />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  )
}