import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("aqua")

  return (
    <div className='w-screen h-screen duration-200' style={{background: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2'>
        <div className='flex flex-wrap justify-center gap-3 rounded-3xl bg-white px-3 py-2 shadow-lg'>
        
        <button className='outline-none bg-red-500 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("red"))}
         >Red</button>
        <button className='outline-none bg-green-600 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("green"))}
         >Green</button>
        <button className='outline-none bg-blue-600 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("blue"))}
         >Blue</button>
        <button className='outline-none text-white
         px-4 py-1 rounded-full shadow-lg' style={{background: "olive"}}
         onClick={()=>(setColor("olive"))}
         >Olive</button>
        <button className='outline-none bg-gray-500 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("grey"))}
         >Gray</button>
        <button className='outline-none bg-yellow-500 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("yellow"))}
         >Yellow</button>
        <button className='outline-none bg-pink-600 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("pink"))}
         >Pink</button>
        <button className='outline-none bg-purple-600 text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("purple"))}
         >Purple</button>
        <button className='outline-none bg-gray-300 text-black
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("lavender"))}
         >Lavender</button>
        <button className='outline-none bg-white text-black
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("white"))}
         >White</button>
        <button className='outline-none bg-black text-white
         px-4 py-1 rounded-full shadow-lg'
         onClick={()=>(setColor("black"))}
         >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
