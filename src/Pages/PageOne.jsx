import React from 'react'

const PageOne = () => {
  return (
            <section id="section-1">
          <div className="middle">
            <div className="top">
              <h1>
                INTERSECTING <br /> WAVE
              </h1>
            </div>
            <div className="center">
              <div className="left">
                <p>
                  Studio Dialect explores how technology can shape the way{" "}
                  <br />
                  people move, feel and interact. <br /> <br />
                  From websites to installations, we design experiences that sit{" "}
                  <br /> comfortably at the edge of what’s possible, guided by a
                  belief in <br />
                  thoughtful design, meaningful experiences and a love of <br />{" "}
                  solving hard problems.
                </p>
              </div>
              <div className="right">
                <div className="video-div">
                  <video muted autoPlay loop id="video-play" src="../reel-short.mp4"></video>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h1>
                & <br /> TECHNOLOGY{" "}
              </h1>
            </div>
          </div>
        </section>
  )
}

export default PageOne