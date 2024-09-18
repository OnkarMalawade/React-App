import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3'>
                <button className='outline-none rounded-full px-4 py-1 text-white shadow-lg' 
                onClick={() => setColor("red")}
                style={{backgroundColor : "red"}}>
                  Red
                </button>
                <button 
                onClick={() => setColor("orange")}
                className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor : "orange"}}>
                 Orange
                </button>
                <button 
                onClick={() => setColor("darkblue")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor : "darkblue"}}>
                  Blue
                </button>
                <button
                onClick={() => setColor("darkgreen")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor : "darkgreen"}}>
                  Green
                </button>
                <button
                onClick={() => setColor("black")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor : "black"}}>
                  Black
                </button>
              </div>
            </div>
      </div>
    </>
  )
}

export default App
