import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoUniversite from './assets/logo-universite-cote-azur.svg'
import './App.css'

function Header(){
  return (
    <header>
      <img src={logoUniversite} className="logo" alt="Logo Formation" />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}

function MainContent(){
  return (
    <main>
      <p> :)</p>
    </main>
  );
}

function Footer(){
  return (
    <footer style={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      textAlign: 'center', 
      padding: '1rem',
      backgroundColor: '#242424'
    }}>
      <p>Tous droits réservés - [Raji] [Hamza]</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
