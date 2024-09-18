import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook : it holds selected Reference vale in it
  const passwordRef = useRef(null)

  // execute method 
  // use callback call when some change renders 
  const passwordGenerator = useCallback( () => {

    // password generator
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz"
    let Spcstr = "{})*(&^%$#@!<>"
    if (numberAllowed) {
      str += "0124567893"
    }

    if(charAllowed){
      str += Spcstr;
    }

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length + 1))
      pass += char
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword] )
  
  //render
  //passwordGenerator() gives Error 

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 33)
    window.navigator.clipboard.writeText(password)
  }, [password])

  //execute : rendering error solved using useEffect
  useEffect(() => { 
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])
  

  return (
    <>
    
    <div className="text-center w-full max-w-md mx-auto shadow-xl rounded-lg px-4 my-3 mb-4 text-orange-500 bg-gray-900">
    <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
      <div className="mb-4 rounded-lg overflow-hidden flex shadow-lg">
        <input
          type="text"
          value={password}
          className="w-full py-1 px-3 outline-none" placeholder="Password" readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClip} className='hover:bg-sky-800 outline-none bg-sky-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"  
            min={8}
            max={32}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)}/>
            <label>Length : {length}</label>
        </div>
        <div
          className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked= {numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
        </div>
        <div
          className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked= {charAllowed}
                id='charInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="charInput">Specical Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
