import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneSquare, faEnvelope, faMapMarkerAlt, faCode, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faTelegramPlane, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export default function Main() {
  const [bg, setBg] = useState("transparent")
  const Background = "https://cdn.iconscout.com/icon/premium/png-256-thumb/recipe-book-2589814-2160486.png"
  useEffect(() => {
    window.addEventListener('scroll', event => {
      if(window.scrollY > 5){
        setBg('#141b45')
      }
      if(window.scrollY === 0){
        setBg('transparent')
      }
    })
  }, [])
  return (
    <div >
      <Container fluid style={{height: "100vh"}} id="home">
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor: bg}} className="primary" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand">{`Niku419`}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#home" className="styleline">Home</Nav.Link>
            <Nav.Link href="#about" className="styleline">About</Nav.Link>
            <Nav.Link href="#skills" className="styleline">Skills</Nav.Link>
            <Nav.Link href="#experience" className="styleline">Experience</Nav.Link>
            <Nav.Link href="#pricing" className="styleline">Pricing</Nav.Link>
            <Nav.Link href="#contact" className="styleline">Contact</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row main flex-md-row-reverse justify-content-between top-pad">
        <div className="col-md-6 center-head">
          <img src="portfolio.png" alt="Portfolio" />
        </div>
        <div className="col-md-6 pt-0 pt-md-5 center-head">
          <div className="align-left">
            <div className="badge">Hello I'm</div>
            <div className="heading pb-3">{`<Nikhil/>`}</div>
            <div className="info p-1">
              <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faCode}/>
              <div className="inline pad">Full Stack Developer</div>
            </div>
            <div className="info p-1">
              <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faEnvelope}/>
              <div className="inline pad">2019198@iiitdmj.ac.in</div>
            </div>
            <div className="info p-1">
              <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faPhoneSquare}/>
              <div className="inline pad">+919438002199</div>
            </div>
            <div className="info p-1">
              <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faMapMarkerAlt}/>
              <div className="inline pad">Near Hotel 180 degree, Jeypore</div>
            </div>
            <div className="info pt-5">
              <a role="button" className="btn btn-primary reference" href="https://instagram.com/_niku_419">
                <FontAwesomeIcon size="2x" icon={faInstagram}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://github.com/niku419">
                <FontAwesomeIcon size="2x" icon={faGithub}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://linkedin.com/niku_419">
                <FontAwesomeIcon size="2x" icon={faLinkedinIn}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://t.me/Niku_419">
                <FontAwesomeIcon size="2x" icon={faTelegramPlane}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://www.facebook.com/profile.php?id=100069976086066">
                <FontAwesomeIcon size="2x" icon={faFacebookF}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      </Container>
      <Container fluid id="about" className="pt-0 pt-md-3 about">
      <h1 className="heading heading-about pt-0 pt-md-5">About me</h1>
      <div className="row main justify-content-between">
        <div className="col-md-6 center-head">
          <img className="image img-fluid" src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/ab-img.png" alt="programmer"/>
        </div>
        <div className="col-md-6 center-head pt-4">
          <div style={{color: "#373737"}}>Hello! I'am Nikhil, full stack developer from India. few somw lines about me... and i am good at</div>
          <div className="d-flex flex-wrap justify-content-center pt-2 pt-md-4">
            {['Javascript','CSS','React','Firebase','NodeJS','MongoDB','GraphQL','Bootstrap'].map((value, index) => (
              <div key={index} className="p-2"><Button variant="outline-dark">{value}</Button></div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center pt-2 pt-md-4 pb-2">
          <a className="CV btn" role="button" href="https://google.com" style={{backgroundColor: "#141b45"}}>
            <div className="inline pad">My CV template</div>{' '}
            <FontAwesomeIcon className="inline" flip="horizontal" icon={faDownload}/>
          </a>
        </div>
      </div>
      </Container>
      <Container fluid id="about" className="pt-0 pt-md-3 about">
        <h1 className="heading heading-about pt-0 pt-md-5">My Recent Works</h1>
        {/* <CardDeck className="row"> */}
          <div className="card body">
            <div className="card-header p-0" style={{backgroundImage: "url(" + Background + ")"}}>
              <div className="card-header-slanted-edge">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>
              </div>
            </div>
            <div className="card-body pb-0">
              <h2 className="name">John Smith</h2>
              <div className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aperiam.</div>
              <div className="d-flex justify-content-between">
                <a className="info p-1" href="some">
                  <div className="inline pr-1"><strong style={{paddingRight: "0.5rem"}}>Code</strong></div>
                  <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faCode}/>
                </a>
                <a className="info p-1" href="some">
                  <div className="inline pr-1"><strong style={{paddingRight: "0.5rem"}}>View</strong></div>
                  <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faCode}/>
                </a>
              </div>
            </div>
          </div>
        {/* </CardDeck> */}
      </Container>

      {/* <Container fluid id="what-i-do" className="pt-5 center-head">
        <div className="main justify-content-between ">
          <div className="col-md-6 center-head">
            <h1 className="heading">Web Developer</h1>   
          </div>
          <div className="col-md-6 center-head">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
        </div>
      </Container> */}
    </div>
  )
}
