import './App.css'
import './index.css'

import Button from './components/button'
import Project from './components/Project'

function App() {

  return (
    <>
    <div className="page">

      <div className='header'>
        <img src='./profile_picture.png' alt='profile_picture'
          className='profilePicture'/>
      </div>

      <div className='nav'>
        <Button/>
        <Button/>
      </div>

      <div className='body'>
        <div className='section'>
          <Project/>
          <Project/>
        </div>
        <div>
          <Project/>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
