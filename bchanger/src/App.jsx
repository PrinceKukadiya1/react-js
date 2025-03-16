import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setcolor] = useState("#000")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-2xl gap-3 bg-white px-3 py-2 rounded-3xl '>
            <button onClick={() => setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: 'red' }} >Red</button>

            <button onClick={() => setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: 'green' }} >Green</button>

            <button onClick={() => setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: 'blue' }} >Blue</button>

            <button onClick={() => setcolor("Olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: 'olive' }} >Olive</button>

            <button onClick={() => setcolor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: 'gray' }} >Gray</button>

            <button onClick={() => setcolor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-2xl ' style={{ backgroundColor: 'yellow' }} >Yellow</button>

            <button onClick={() => setcolor("Pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-2xl ' style={{ backgroundColor: 'Pink' }} >Pink</button>

            <button onClick={() => setcolor("Purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-2xl ' style={{ backgroundColor: 'Purple' }} >Purple</button>

            <button onClick={() => setcolor("Lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-2xl ' style={{ backgroundColor: 'Lavender' }} >Lavender</button>

            <button onClick={() => setcolor("White")} className='outline-none px-4 py-1 rounded-full text-black shadow-2xl ' style={{ backgroundColor: 'White' }} >White</button>

            <button onClick={() => setcolor("Black")} className='outline-none px-4 py-1 rounded-full text-white shadow-4xl ' style={{ backgroundColor: 'Black' }} >Black</button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
