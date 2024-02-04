import { FaReact } from "react-icons/fa";
import { Button } from "./components/Button";
import { useState } from 'react'


function App() {

  const [num, setNum] = useState(0)
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState(0)

  const buttons = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "+"],
    ['.', 0, '=', '-']
  ]


  const renderedButtons = buttons.map((row, i) => {
    return <div key={i} className='flex justify-between mt-2'>{row.map((btn, i) => <Button key={i} onClick={() => handleButtonClick(btn)}>{btn}</Button>)}</div>
  })

  const handleClear = () => {
    setNum(0)
    setOperation('')
    setResult(0)
  }

  const handleButtonClick = (button) => {

    if (button === "=") {
      setResult()
    }

    const operations = ['-', '+', '/', '*']

    if (operations.includes(button)) {
      setOperation(button)
    }


    if (num === '0') {
      setNum(String(button));
    } else if (!operations.includes(button)) {
      setNum(String(num + button));
    }

    console.log(`This is the number state ${num}`)
    console.log(operation)
    console.log(result)


  };


  return (


    <div className="App">
      <div className=' flex justify-center mt-20 text-4xl'>
        <h2 className='text-blue-600'>React Calculator</h2>
        <span className=''><FaReact size='40' className='text-blue-600 ml-4' /></span>
      </div>



      <section id="Calculator" className='flex justify-center '>
        <div className='mt-48 border border-black w-96 h-140 p-4 rounded-lg bg-gray-500'>


        {/* Display */}
          <div id='Display' className='flex justify-end border bg-gray-800 text-white rounded border-black h-20'>
            <div>
              <p className='h-1/2 text-4xl mr-2'>{num ? num : result}</p>
              <p>{operation}</p>
            </div>
          </div>

          {renderedButtons}

          <div>
            <button onClick={handleClear} className='border border-black text-xl rounded-lg w-full bg-red-600 text-white h-14 mt-2'>Clear</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
