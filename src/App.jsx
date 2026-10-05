import { useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import List from './components/List';
import UsersDirectory from './components/UsersDirectory';
import ListTask from './components/ListTask';
import './App.css';

function AppContent() {
  const [activePage, setActivePage] = useState('todo2');
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${theme}`}>
      <Header />
      <div className="main-app">
        <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px', flexWrap: 'wrap' }}>
          <button onClick={() => setActivePage('about')}>About</button>
          <button onClick={() => setActivePage('cart')}>Cart</button>
          <button onClick={() => setActivePage('todo')}>To-Do-List</button>
          <button onClick={() => setActivePage('todo2')}>To-Do-List2</button>
          <button onClick={() => setActivePage('users')}>Users</button>
          
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'light' ? '  Dark mode' : '  Light mode'}
          </button>
        </nav>

        <main>
          {activePage === 'about' && <About />}
          {activePage === 'cart' && <CartItem name="Laptop" price={1000} />}
          {activePage === 'todo' && <List />}
          {activePage === 'todo2' && <ListTask />}
          {activePage === 'users' && <UsersDirectory />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;