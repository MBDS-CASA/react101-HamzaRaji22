import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Home from './pages/Home'
import Etudiants from './pages/Etudiants'
import Notes from './pages/Notes'
import Matieres from './pages/Matieres'
import APropos from './pages/APropos'

function App() {
  return (
    <>
      <Header />
      <Menu />
      <main style={{ 
        marginLeft: '250px',
        padding: '2rem',
        minHeight: 'calc(100vh - 180px)'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etudiants" element={<Etudiants />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/matieres" element={<Matieres />} />
          <Route path="/apropos" element={<APropos />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
