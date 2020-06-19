import React from "react"

import {Grid, Divider} from "@material-ui/core"
import {Link} from 'gatsby'
// For Background Image
import '../css/index.css'
import face from '../images/bob.jpg'

const category = ['Name', 'University', 'Major', 'Expected Graduation date']
const info = ['Zhanchong Deng', 'University of Calfornia, San Diego', 'Computer Science', '06/2022']
const infoElement = []

const linkStyle = {
  color: '#e8a87c',
  textDecoration: 'none',
}

const IndexPage = () => (
  <div className="root">
    <Grid container
      spacing={0}
    >
      <Grid item
        xs={12}
        className="selfie"
      >
          <div className="black-overlay">
            <div className="welcome-message">
              <p>Hey, I'm</p>
              <h1>
                &mdash;Bobby Deng&mdash;
              </h1>
            </div>
          </div>
      </Grid>
      
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
    
    <Grid container
      spacing={0}
    >
      
      <Grid item
        xs={12}
        md={6}
        className="preview_card"
      >
        <h2>Here's what I have done</h2>
        <p>Coming Soon...</p>
      </Grid>

      <Grid item
        xs={12}
        md={6}
        className="preview_card"
      >
        <h2>Here's what I am good at</h2>
        <p>Coming Soon...</p>
      </Grid>

      <Grid item
        xs={12}
        md={6}
        className="preview_card"
      >
        <h2>Here's my education</h2>
        <p>Coming Soon...</p>
      </Grid>

      <Grid item
        xs={12}
        md={6}
        className="preview_card"
      >
        <h2>Here's how you reach me</h2>
        <p>Coming Soon...</p>
      </Grid>

    </Grid>

  </div>
)

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     indexImage: file(relativePath: { eq: "touxiang3.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;