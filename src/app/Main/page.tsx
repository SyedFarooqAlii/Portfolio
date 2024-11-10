import React from 'react'
import Link from 'next/link'
import { Span } from 'next/dist/trace'
const Main = () => {
  return (
    <div>
        
        <section>
            <div className="navbar">
                <h3 className="logo">Syed <span>Farooq</span></h3>
                <i id="menu-icon" className
                ='bx bx-menu'></i>
                <nav> 
                    <Link href="/"> <span id="homea">Home</span></Link>
                      <Link href={"/About"}><span>About</span></Link>
                    <Link href={"/Skill"}>  <span>Skills</span></Link>
                      <Link href={"/Project"}><span>Projects</span></Link>
                      <Link href={"/Contact"}><span>Contact</span></Link>
                  
              
              </nav>
              </div>
        <div className="main">
            
            <div className="info">
                <div className="devinfo">
                
            




                <div className="hello">Hi, I'm <span>Farooq</span></div>
                <div className="text-animation">I'm a <p></p>
                </div>
                <div className="about">
                    A Passionate Student Of | Full Stack Developer | Web 3.0 | Gen AI & Metaverse | From Karachi, Pakistan.
                    </div>
                    <div className="social">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-instagram' ></i></a>
                        <a href="#"><i className='bx bxl-github' ></i></a>
                        <a href="#"><i className
                        ='bx bxl-linkedin' ></i></a>
                    </div>
                <div className="buttons">
                    <button className="btn1">Hire Me</button>
                    <button className="btn2">Contact</button>
                </div>
                </div>
<div className="imge">
                <img src="/car2.avif" alt="my pic"></img></div>
            </div>
        </div>
        </section>  

    </div>
  )
}

export default Main