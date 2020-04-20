import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#black', height: '176px',background: 'url(https://pokemongohub.net/wp-content/uploads/2018/11/Pokemon-Lets-Go.jpg) center / cover'}} ></CardTitle>
            <CardText>
<h5>Pokemon Search React Project</h5>   
 <p>Associated on the bottom is a class project that we did using react to search Pokémon  </p>       

</CardText>
            <CardActions border>
             {/* Github */}
       <center>  <a href="https://github.com/Crisiskyle" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a></center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
           
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#black', height: '176px',background: 'url(https://students.cah.ucf.edu/~ky364391/portfolio/img/Final%20Project%202D%20Design%20For%20experimental%20mount%20proto%202.jpeg) center / cover'}} ></CardTitle>
            <CardText>
            <h5><center>Divided</center></h5>  
            Down bellow is a piece I had made for a final project in college. the pieces name is called Divided.

            </CardText>
            <CardActions border>
             {/* Open picture */}
       <center>  <a href="https://students.cah.ucf.edu/~ky364391/portfolio/img/Final%20Project%202D%20Design%20For%20experimental%20mount%20proto%202.jpeg" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-far fa-image" aria-hidden="true" />
          </a></center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
        
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#black', height: '176px',background: 'url(https://students.cah.ucf.edu/~ky364391/portfolio/img/Karen.jpg) center / cover'}} ></CardTitle>
            <CardText>   
            <h5><center>Greyscale painting</center></h5>  
            Down bellow is a piece I had made for a project in college. the pieces name it involves 9 colors of grey.        </CardText>
            <CardActions border>
             {/* Open picture */}
       <center>  <a href="https://students.cah.ucf.edu/~ky364391/portfolio/img/Karen.jpg" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-far fa-image" aria-hidden="true" />
          </a></center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#black', height: '176px',background: 'url(https://students.cah.ucf.edu/~ky364391/Marmy/images/IMG_5386.jpeg) center / cover'}} ></CardTitle>
            <CardText>   
            <h5><center>Marmelade's Website</center></h5>  
I made this website because my aunt's dog was too adorable as a puppt. One of the funner projects I made.   
</CardText>  
<CardActions border>
             {/* Open picture */}
       <center>  <a href="https://students.cah.ucf.edu/~ky364391/Marmy/Homepage.html" rel="noopener noreferrer" target="_blank">
            <i className="fas fa-globe" aria-hidden="true" />
          </a></center>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
         
            </CardMenu>
          </Card>
        
 
    </div>


      )
    } 
  }

  


  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><p6>Projects</p6></Tab>
       
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>

      
      
      
    )
  }
}

export default Projects;
