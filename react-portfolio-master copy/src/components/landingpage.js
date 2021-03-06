import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://students.cah.ucf.edu/~ky364391/testfolder/me.JPG"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
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
