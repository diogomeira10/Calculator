import { FaReact } from "react-icons/fa";
import { Button } from "./components/Button";
import { useState} from 'react'


function App() {

  const [value,setValue] = useState('123')

  const buttons = [
    [7,8,9,"/"],
    [4,5,6,"*"],
    [1,2,3,"+"],
    ['.',0,'=','-']
  ]

  const renderedButtons = buttons.map((row) => {
     return <div className='flex justify-between mt-2'>{row.map((btn,i) => <Button>{btn}</Button>)}</div>
  })

  const handleClear = () => {
    setValue('')
  }



  return (

    
    <div className="App">
      <div className=' flex justify-center mt-20 text-4xl'>
        <h2 className='text-blue-600'>React Calculator</h2>
        <span className=''><FaReact size='40' className='text-blue-600 ml-4' /></span>
      </div>



      <section id="Calculator" className='flex justify-center '>
        <div className='mt-48 border border-black w-96 h-140 p-4 rounded-lg bg-gray-500'>

          <div id='Display' className='border bg-gray-800 text-white rounded border-black h-20'>{value}</div>

          {renderedButtons}

          <div>
            <button onClick={handleClear} className='border border-black rounded-lg w-full bg-red-600 text-white h-14 mt-2'>Clear</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
