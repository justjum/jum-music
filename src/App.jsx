import { useState } from 'react'
import ReactPlayer from 'react-player'
import portrait from '../src/assets/images/Jum-Portrait.jpg'


import './App.css'

function App() {

  const [content, setContent] = useState(Gigs)
  console.log(content);
  return (
    <>
      <div className='App'>
         <Header />

        <div className='content'>
          {<content />}
        </div>

      </div>

    </>
  )
}



export default App
