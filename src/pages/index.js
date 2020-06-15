import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Container, Grid} from "@material-ui/core"

// For Background Image
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'
import '../css/background_img.css'
import touxiang from '../images/touxiang.jpg'

const IndexPage = (props) => (
  <div>
  <Grid container
    spacing={2}
  >
    <Grid item
      xs={12}
    >
       {/* <BackgroundImage 
        className="selfie"
        fluid={props.data.indexImage.childImageSharp.fluid}
       >
         <div className="black-overlay">
           <div className="welcome-message">
            <p>Hey, I'm</p>
            <h1>
              &mdash;Bobby Deng&mdash;
            </h1>
           </div>
         </div>
       </BackgroundImage> */}
      <div className="selfie">
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

    <Grid item
      xs={6}
    >
      <p>Coming soon...</p>
    </Grid>

    <Grid item
      xs={6}
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