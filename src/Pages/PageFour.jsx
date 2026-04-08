import React from 'react'
import ImageSequence from '../components/ImageSequence'

const PageFour = () => {
  return (
    <section id="section-4">
          <div className="vignette">
            <div className="contrast">
              <div className="bottom">
                <div className="left">
                  <div className='left-menu'>
                    <h1>Contact</h1>
                    <h2>LinkedIn</h2>
                    <h2>Dribble</h2>
                    <h2>Behance</h2>
                  </div>
                  <div className='right-menu'>
                    <h1>Navigtion</h1>
                    <h2>Services</h2>
                    <h2>Works</h2>
                    <h2>Team</h2>
                  </div>
                </div>
                <div className="right">
                  <div className="right-small">
                    {" "}
                    <h1>Studio Note</h1>
                    <p>
                      This space brings together work we’ve <br /> and work
                      we’re currently doing, along with <br /> conversations
                      that continue beyond <br /> individual projects. If it
                      feels right, this can be <br />
                      the starting point
                    </p>
                  </div>{" "}
                </div>
              </div>
              <div className="bottom-img">
                <h1>Dialect</h1>
                <img className='bottom-image' src="/img6.avif" alt="" />
              </div>
            </div>
          </div>
          <ImageSequence />
        </section>
  )
}

export default PageFour