import React from 'react';
import Footer from '../../components/Footer'
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import boook from "../../images/boook.jpg"
import copy from "../../images/copy.jpg" 
import newspaper from "../../images/newspaper.jpg"
import magazine from "../../images/magazine.jpg"
import './3rwaste.css'
import './Waste'
export const Rwaste = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <section className="Rwaste" id="Rwaste">
      <Container>
        <Row>
          <Col>
            <div className="Waste-box">
              <Carousel responsive={responsive} infinite={true} className="waste-slider">
              <div className="item">
                  <img src={boook} alt="Images" />
                  <h5>Books</h5>
                </div>
                <div className="item">
                  <img src={copy} alt="Images" />
                  <h5>Copy</h5>
                </div>
                <div className="item">
                  <img src={newspaper} alt="Images" />
                  <h5>Newspaper</h5>
                </div>
                <div className="item">
                  <img src={magazine} alt="Images" />
                  <h5>paper</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </section>
  
  )
}
export default Rwaste;