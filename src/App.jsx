import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import CartItem from './components/CartItem'
import List from './components/List'

function App() {
  const [activePage, setActivePage] = useState('todo');

  return (
    <>
    <Header />
    <div className="main-app">
      <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px' }}>
        <button onClick={() => setActivePage('about')}>  About</button>
        <button onClick={() => setActivePage('cart')}>  Cart</button>
        <button onClick={() => setActivePage('todo')}>  To-Do-List</button>
      </nav>

      <main>
        {activePage === 'about' && <About />}
        {activePage === 'cart' && <CartItem name="Laptop" price={1000} />}
        {activePage === 'todo' && <List />}
      </main>
    </div>

      {/* <About />
      <CartItem name="Laptop" price={1000} />
      <CartItem name="Phone" price={500} /> */}
      
      <Footer />

    
    </>
  )
}

export default App
