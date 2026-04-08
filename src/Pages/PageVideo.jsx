import React from 'react'

const PageVideo = () => {
  return (
            <section className="video">
          <nav className="navbar">
            <h1>DIALECT</h1>
            <h4>Our Show Case</h4>
            <h2>[ MENU ]</h2>
          </nav>
          <div className="text">
            <h1>
              House Of <br /> <span>Dialect</span>
            </h1>
            <p>We are a motley crew of creative nerds.</p>
          </div>
          <video muted loop autoPlay src="/video2.mp4"></video>
        </section>
  )
}

export default PageVideo