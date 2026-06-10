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
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <img 
              src="/logo.png" 
              alt="Mordex Logo" 
              style={{ 
                height: '32px', 
                filter: 'brightness(0) invert(1)', /* Creates a clean white silhouette for the dark footer */
                opacity: 0.9 
              }} 
            />
            <span style={{ fontWeight: '800', letterSpacing: '1px', fontSize: '1.25rem', color: '#FFFFFF' }}>MORDEX</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Mordex Agency. Jacksonville, FL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
