import React from 'react'
import Header from '../Header/page'
const Project = () => {
  return (
    <div>

        <Header/>
    {/* projectpage */}
    
    <section id="project-sec">
        <div className="pro-sec">
            <h3>WHAT I WILL DO FOR YOU</h3>
            <h2 className="ph">LATEST  PROJECTS</h2></div>
     
     <div className="port-gallery">
    
        <div id="port-box"><div className="port-img">
            <img id="change-img" src="/newtic.png" alt=""></img>
        </div>
    <div className="port-cont">
        <h3 className="tic">Tic Tac Toe</h3>
        <p>A tic-tac-toe game using HTML, CSS, and JavaScript. The project demonstrates the understanding of basic web development and game logic implementation and see the result against the computer’s choice.</p>
       <a href=""><i className='bx bx-link-external'></i></a>
    </div>
    </div>
     
     
    <div id="port-box"><div className="port-img">
            <img src="rsp5.png" alt=""></img>
        </div>
    <div className="port-cont">
        <h3>Rock Paper Scissor</h3>
        <p>A rock-paper-scissors game using HTML, CSS, and JavaScript. This interactive game allows players to select rock, paper, or scissors and instantly see the result against the computer’s choice.</p>
       <a href=""><i className='bx bx-link-external'></i></a>
    </div>
    </div>
     
    
        <div id="port-box"><div className="port-img">
            <img src="/bnk5.jpg" alt=""></img>
        </div>
    <div className="port-cont">
        <h3>Banking Application</h3>
        <p>A (CLI) banking application using TypeScript. The application allows users to perform basic banking operations, showcasing skills in TS and CLI app development</p>
       <a href=""><i className='bx bx-link-external'></i></a>
    </div>
    </div>
    
    
        <div id="port-box"><div className="port-img">
            <img src="/mobtodo.jpg" alt=""></img>
        </div>
    <div className="port-cont">
        <h3>Todo List App</h3>
        <p>A CLI-based to-do list app using TypeScript. This app enables users to manage tasks, allowing for easy addition, deletion, and viewing of tasks in a simple text-based interface.</p>
       <a href=""><i className='bx bx-link-external'></i></a>
    </div>
    </div>
    
        <div id="port-box"><div className="port-img">
            <img src="/spo.avif" alt=""></img>
        </div>
    <div className="port-cont">
        <h3>Spotify App</h3>
        <p>A Spotify-inspired application using HTML, CSS, and JavaScript. This project showcases the skills in front-end design and JavaScript functionality, delivering an interactive music streaming experience.</p>
       <a href=""><i className='bx bx-link-external'></i></a>
    </div>
    </div>
    
        <div id="port-box"><div className="port-img">
            <img  src="/blog3.avif" alt=""></img>
        </div>
    <div className="port-cont">
        <h3>A Blog Website</h3>
            <p>A dynamic blog website using HTML, CSS, JavaScript, and Next.js. This project showcases both static and interactive content, with modern styling and responsive design.</p>
       <a href=""><i className='bx bx-link-external'></i></a>
    </div>
    </div>
    
    </div>
    
    
    </section>
    </div>
  )
}

export default Project