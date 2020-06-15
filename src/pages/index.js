import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import {Container, Grid} from "@material-ui/core"

// For Background Image
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import '../css/index.css'
import touxiang from '../images/touxiang.jpg'

const IndexPage = (props) => (
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
      md={6}
    >
      <p>Coming soon...</p>
    </Grid>

    <Grid item
      xs={12}
      md={6}
    >
      <p>Coming soon...</p>
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