import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Value from './components/Value'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Value />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      
      {/* Clean Corporate Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem 2rem', 
        background: 'var(--navy-primary)',
        color: '#E0E7FF',
        fontSize: '0.9rem',
      }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '1px', fontSize: '1.25rem', color: '#FFFFFF' }}>
            MORDEX
          </div>
          <p>&copy; {new Date().getFullYear()} Mordex Agency. Jacksonville, FL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
