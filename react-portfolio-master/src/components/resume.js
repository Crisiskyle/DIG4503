import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
<<<<<<< HEAD


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
=======
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
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>
<<<<<<< HEAD

            <h2 style={{paddingTop: '2em'}}>Paul Hanna</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
=======
          
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
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
