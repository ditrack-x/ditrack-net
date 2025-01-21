import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
	  <p>Dedicado a Leilani 💖</p>
      </div>
      <h1>Bienvenido a ditrack.net</h1>
	<h3>Esta página esta en construcción</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dale click a este botón si estas emocionado: {count}
        </button> 
      </div>
      <p className="read-the-docs">
       Sígueme en mi red social principal en Instagram ✨ @ditrack ✨ 
      </p>
    </>
  )
}

export default App
