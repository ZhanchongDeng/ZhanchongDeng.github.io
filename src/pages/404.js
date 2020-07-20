import React from "react"

import {Grid, Divider} from "@material-ui/core"
import {Link} from 'gatsby'
// For Background Image
import '../css/index.css'
import '../css/nav.css'
import HomeIcon from '@material-ui/icons/Home';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSmall: false,
    };
  }
  componentDidMount() {
    this.setState({isSmall: window.screen.width > 1025})
  }
  render() {
    return (
      <div className="root">
        <Grid container >
          <Grid className = "navbarGrid" item xs={10}>
            <ul className = "navbar">
              <li>
                <Link className = "link" to = '/'>Projects</Link>
              </li>
              <li>
                <Link className = "link" to = '/'>Skills</Link>
              </li>
              <li>
                <Link className = "link" to = '/'>Education</Link>
              </li>
              <li>
                <Link className = "link" to = '/'>Contact</Link>
              </li>
            </ul>
          </Grid>
          
          <Grid className = "homeicon-container" item xs={2} align = 'center' justify = 'center'>
            <Link to='/'>
              <HomeIcon className = "homeicon" style={{ fontSize: '50px', color: 'white' }}/>
            </Link>
          </Grid>
          
          <Grid item xs={12}>
            <div className="selfie" style={{"background-attachment": this.state.isSmall ? "fixed":"scroll"}}>
                <div className="black-overlay">
                  <div className="welcome-message">
                    <p>Hey, I'm</p>
                    <h1>
                      &mdash;Bobby Deng&mdash;
                    </h1>
                  </div>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default NotFoundPage
