import './App.css'
import './index.css'

import Button from './components/button'
import Project from './components/Project'

const projects = new Map([
  ['Inner Peace', [
    "Inner Peace was my capstone project for the university of auckland. Our client requested an software solution for children struggling with ADHD in the classroom. Inner Peace was implemnted in React Native and it contains a game of wack a mole containing nice animations, a combo function and high scores. It contains a mindfulness section which helps with deep breathing aswell as a music player. It contains a self survery of the user's mental health and a statistics section so that the user can see their improvment. And finally it contains data tracking of the users activity and reported mental health sending this data to the cloud for our client",
    "https://drive.google.com/file/d/17IZptk32Q9TpkUMUyI05OjCqIccJqAg6/view"
  ]],
  
  ['A Concert Booking Service', [
    "Java project using JAX-RS, Jackson, JPA, and JPQL The booking service allows clients to retrieve information about concerts and performers, to make and enquire about seats and reservations, and to authenticate users. When making a reservation, clients may enquire about available seats. They are be informed of any unbooked seats, along with their pricing. Clients may select any number of seats to book. When making a reservation request, double-bookings are not permitted. In addition, clients are be able to subscribe to information regarding concert bookings. Specifically, they are able to subscribe to watch one or more concerts / dates, and be notified when those concerts / dates are about to sell out.",
    "https://drive.google.com/drive/folders/1glyuLXdmbdr_7rxMReqsL-yurJZSmyzj"
  ]],

  ['Server Side for Ako Maori', [
    "A set of APIs created on C# which runs on .NET 7 for my web application 'Ako Maori' Ako Maori is a online shopping application and also a language learning application",
    "https://github.com/PeymonA/akomaori-web-app-server-side"
  ]],

  ['Client Side for Ako Maori', [
    "The front-end html, CSS and javascript for my web application 'Ako Maori'",
    "https://github.com/PeymonA/akomaori-web-app-client-side"
  ]],

  ['Convolution program', [
    "A python program to implement a 2D convolution. In this program, 1024x1024 data and 5x5 filters are read from the files. After the completion of the calculation, the results matrix (1024x1024) is written into a file.",
    "https://github.com/PeymonA/convolution_program"
  ]],

  ['Threads, forks and locks', [
    "A C program that demonstrates how you can safely use the same resource in different system-wide processes. uses the pthread_atfork function to set up functions which acquire the lock , before the fork and release it after the fork (in both the parent and child processes).",
    "https://github.com/PeymonA/threads-forks-and-locks-in-c"
  ]],

  ['Music Web Application', [
    "I created this Music Web Application with a partner. We designed and built a Web application that lets users interact with a collection of soundtracks. We started with creating our domain model, turning it into a web application by following a series of functional and Non-functional requirements for our web application. Finally, we extended the application such that instead of a memory repository, it uses a SQLite database to persist data",
    "https://github.com/PeymonA/Music-Web-App"
  ]],

  ['Bouncing Program', [
    "The Bouncing Program is a Java program which animates user selected shapes bouncing off the screem. The project involves working with design patterns and Java's Swing API. The Bouncing Program is a model/view application that presents two views of a list of bouncing shapes in the program. Such applications are commonplace and introduce the need for views to be mutually consistent and synchronised with a data structure whose state changes at run-time.",
    "https://github.com/PeymonA/A_Bouncing_Program"
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

      <div className='nav'>
        <Button/>
        <Button/>
      </div>

      <div className='body'>

        <div className='section' style={{margin:'2%'}}>
          <img src='./game.png' alt='inner_peace_game' style={{width:'30%', height:'30%'}}/>
          <Project title='Inner Peace' description={projects.get('Inner Peace').at(0)} link={projects.get('Inner Peace').at(1)}/>
          <img src='./breathe.png' alt='inner_peace_breathe' style={{width:'30%', height:'30%'}}/>
        </div>
        <div className='section' style={{justifyContent:'space-around'}}>
          <img src='./music_player.png' alt='inner_peace_music_player' style={{width:'30%', height:'30%'}}/>
          <img src='./stats.png' alt='inner_peace_stats' style={{width:'30%', height:'30%'}}/>
        </div>

        <div className='section'>          
          <Project title='A Concert Booking Service' description={projects.get('A Concert Booking Service').at(0)} link={projects.get('A Concert Booking Service').at(1)}/>
        </div>
        <div className='section'>
          <Project title='Server Side for Ako Maori' description={projects.get('Server Side for Ako Maori').at(0)} link={projects.get('Server Side for Ako Maori').at(1)}/>
          <Project title='Client Side for Ako Maori' description={projects.get('Client Side for Ako Maori').at(0)} link={projects.get('Client Side for Ako Maori').at(1)}/>
        </div>
        <div className='section'>
          <Project title='Convolution program' description={projects.get('Convolution program').at(0)} link={projects.get('Convolution program').at(1)}/>
          <Project title='Threads, forks and locks' description={projects.get('Threads, forks and locks').at(0)} link={projects.get('Threads, forks and locks').at(1)}/>
        </div>
        <div className='section'>
          <Project title='Bouncing Program' description={projects.get('Bouncing Program').at(0)} link={projects.get('Bouncing Program').at(1)}/>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
