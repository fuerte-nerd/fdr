import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Jumbotron, Button, Container } from "reactstrap"
import FDRLogo from "../images/fdr-logo.png"
import { HeroBg } from "../components/Images"

import { FormattedMessage } from 'react-intl'
import Fade from "react-reveal/Fade"



const IndexPage = props => {

  return (
    <Layout>
      <HeroBg>
        <div className="hero-gradient-overlay" />
        <Jumbotron className="text-white bg-transparent d-flex align-items-end" style={{
          marginTop: "0rem"
        }}>
          <SEO title="Home" />
          <Fade left>
            <Container className="p-4" style={{
              marginBottom: 40
            }}>
                  <div style={{
                      transform: 'rotate(-3deg)',
                      marginTop: '0rem'
                    }}>
                  <img src={FDRLogo} alt="FDR Logo" className="d-block pb-3" style={{
                    width: '40%',
                    maxWidth: 205
                  }}/>
                    <h1 className="display-4 font-weight-bold bg-secondary text-light p-4 d-inline-block" ><FormattedMessage id="hero_heading" defaultLanguage="en" /></h1>
                    <p className="lead bg-secondary text-light p-2">
                      <FormattedMessage id="hero_subheading" defaultMessage="en" />
                    </p>
                    <Button color="light" size="lg" className="p-3 text-secondary font-weight-bold">
                    <FormattedMessage id="cta_button_text" defaultMessage="en" />
                </Button>
                  </div>
                  
            </Container>
          </Fade>
        </Jumbotron>
      </HeroBg>
    </Layout>
  )
}

export default IndexPage
