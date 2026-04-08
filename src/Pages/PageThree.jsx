import React from 'react'

const PageThree = () => {
  return (
            <section id="section-3">
          <div className="left">
            <div className="video-div">
              <video autoPlay muted loop src="../video.mp4" alt="" />
            </div>
          </div>
          <div className="middle">
            <h1>CAPABILITIES</h1>
          </div>
          <div className="right">
            <div className="small-section">Experience Strategy & Design</div>
            <div className="small-section">3D Visualisation</div>
            <div className="small-section">Rapid Concept Prototyping</div>
            <div className="small-section">Motion & Production</div>
            <div className="small-section">Website & App Experience</div>
          </div>
        </section>
  )
}

export default PageThree