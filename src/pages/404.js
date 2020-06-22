import React from "react"
import {Grid} from '@material-ui/core'
import Header from '../components/header'
import {Link} from 'gatsby'
// For Background Image
import '../css/index.css'
import face from '../images/bob.jpg'
const linkStyle = {
  color: '#e8a87c',
  textDecoration: 'none',
}

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
        <Grid container>
          <Grid item xs={12}>
            <Header></Header>
          </Grid>
        </Grid>

        <Grid container item >
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

        <Grid container
          spacing={0}
        >
          <Grid item
            xs={12}
            className="section_title"
          >
            <h2>Who am I?</h2>
          </Grid>

          <Grid item
            xs={12}
            className="face"
            align="center"
          >
            <div className="circular-crop">
              <img className="face" src={face} alt='face of bob' />
            </div>
          </Grid>
          <Grid item
            xs={12}
            className="introduction"
            align="center"
          >
            <div className="text">
            <p>I am a <strong>full-stack developer</strong> and a <strong>data analyst with various</strong> <Link to = '404' style={linkStyle}>project/research experience.</Link></p>
            <p> It is my passion to create applications/data analyzations to inspire others.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default NotFoundPage
