import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import UCF from '../UCF.jpg';
import Valencia from '../Valencia.png';
import Bit from '../Bitmoji.jpeg';
class Resume extends Component {
  render() {
    return(
      
      <div>
        <Grid>
        <Cell className="resume-right-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://students.cah.ucf.edu/~ky364391/testfolder/me.JPG"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>
          
            <h2 style={{paddingTop: '2em'}}>Kyle Melendez</h2>
            <h4 style={{color: 'grey'}}>Front End Designer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I have been practicing web design for about 2 years not doing multiple projects over the course of my time at UCF. Would say I am more comfortable with HTML/CSS and Javascript then most other but do have experience in other's such as React, React Native, Node.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Email</h5>
            <p>Crisiskyle@gmail.com</p>
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h5>Website</h5>
            <p>Crisiskyle.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <img src={Bit} width="300px" height="300px" alt=" "/>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <img src={UCF} width="200px" height="200px" alt=" "/>
            
  

            <Education
           
              startYear={2017}
              endYear={2020}
              schoolName="University of Central Florida"
              schoolDescription="Attended the University of Central Florida and have obtained a degree in Digital Media Web Design. The journey was definately eye opening. Lots of experience gained through out my time. I have a couple of projects linked on my project page if you would like to take a look."
               />
<img src={Valencia}width="200px" height="200px"  alt=" "/>
               <Education
                 startYear={2014} 
                 endYear={2017}
                 schoolName="Valencia College"
                 schoolDescription="Originally a Computer programming major I switched to a pursue a associates degree while I figured things out. After taking a web development course as an elective, I was intrigued on those concepts more. After my time I enrolled in UCF."
                  />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
              <Skills
                skill="Javascript"
                progress={75}
                />
                  <Skills
                    skill="NodeJS"
                    progress={10}
                    />
                    <Skills
                      skill="React"
                      progress={35}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
