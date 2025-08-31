import './App.css'
import './index.css'

import Project from './components/Project'

const projects = new Map([
  ['Inner Peace', [
    "Inner Peace was my capstone project for the university of auckland. Our client requested an software solution for children struggling with ADHD in the classroom. Inner Peace was implemented in React Native and it contains a game of wack a mole containing nice animations, a combo function and high scores. It contains a mindfulness section which helps with deep breathing aswell as a music player. It contains a self survery of the user's mental health and a statistics section so that the user can see their improvment. And finally it contains data tracking of the users activity and reported mental health sending this data to the cloud for our client",
    "https://drive.google.com/file/d/17IZptk32Q9TpkUMUyI05OjCqIccJqAg6/view"
  ]]

]);

function App() {
    return (
      <>
      <div className="page">

        <div className='header'>
          <img src='./profile_picture.png' alt='profile_picture'
            className='profilePicture'/>
        </div>

        <div className='body'>
          
          <div className='section'>
            <h2>About Me</h2>
            <p>My name is Peymon Armand. I graduated from the University of Auckland in 2024 with a Bachelor of Computer Science, and I am currently pursuing a diploma in Digital Technology Development and Design with Mission Ready HQ. I enjoy working across the full stack, exploring how different technologies come together to create real-world solutions. Throughout my studies, I’ve loved experimenting with a wide range of tools, libraries, and frameworks, and I’m always excited to keep learning and building.
            </p>
          </div>

          <div className='section'>
          <h2>Projects</h2>

            <div className='project_section'>
              <Project title='Inner Peace' description={projects.get('Inner Peace').at(0)} link={projects.get('Inner Peace').at(1)}/>
              <div className='photo_section'>
                <img src='./game.png' alt='inner_peace_game'/>
                <img src='./breathe.png' alt='inner_peace_breathe'/>
                <img src='./music_player.png' alt='inner_peace_music_player'/>
                <img src='./stats.png' alt='inner_peace_stats'/>
              </div>
            </div>
          </div>

          <div className='section'>
            <h2>Contact</h2>
            <p>Email: peymon.armand4@gmail.com</p>
            <a href="https://www.linkedin.com/in/peymon-armand-a9629b258/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

        </div>

      </div>
      </>
    )
  
}

export default App
