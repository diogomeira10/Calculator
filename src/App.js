import { FaReact } from "react-icons/fa";
import { Button } from "./components/Button";
import { useState} from 'react'


function App() {

  const [value,setValue] = useState('123')




  return (
    <div className="App">
      <div className=' flex justify-center mt-20 text-4xl'>
        <h2 className='text-blue-600'>React Calculator</h2>
        <span className=''><FaReact size='40' className='text-blue-600 ml-4' /></span>
      </div>



      <section id="Calculator" className='flex justify-center '>
        <div className='mt-48 border border-black w-96 h-140 p-4 rounded bg-gray-500'>

          <div id='Display' className='border bg-gray-800 text-white rounded border-black h-20'>{value}</div>

          <div className='flex justify-between mt-2'>
            <Button>7</Button >
            <Button>8</Button >
            <Button>9</Button >
            <Button>/</Button >
          </div>

          <div className='flex justify-between'>
            <Button>4</Button >
            <Button>5</Button >
            <Button>6</Button >
            <Button className=''>*</Button >
          </div>

          <div className='flex justify-between'>
            <Button>1</Button >
            <Button>2</Button >
            <Button>3</Button >
            <Button>+</Button >
          </div>
          <div className='flex justify-between'>
            <Button>.</Button >
            <Button>0</Button >
            <Button>=</Button >
            <Button>-</Button >
          </div>

          <div>
            <button className='border border-black rounded w-full bg-red-600 text-white h-14 mt-2'>Clear</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
