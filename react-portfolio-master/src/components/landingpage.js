import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
<<<<<<< HEAD
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
=======
              src="https://students.cah.ucf.edu/~ky364391/testfolder/me.JPG"
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
<<<<<<< HEAD
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
=======
              <h1>MEAN Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS ⁃ Bootstrap ⁃ JavaScript ⁃ React ⁃ React Native</p>

        <div className="social-links">

    {/* Github */}
    <a href="https://github.com/Crisiskyle" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>




          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kyle-melendez-8368a2123/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

      

          {/* Youtube */}
          <a href="https://twitter.com/crisiskyle" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
