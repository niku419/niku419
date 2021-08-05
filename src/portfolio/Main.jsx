import React, {useState, useEffect} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneSquare, faEnvelope, faMapMarkerAlt, faCode, faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faTelegramPlane, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export default function Main() {
  const [bg, setBg] = useState("transparent")
  const works = [
    {
      title:"React recipe search",
      image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/recipe-book-2589814-2160486.png",
      des: "A simple recipe search app that finds numerous recipes related to your search using the edamam API...",
      redirect: "https://react-recipe-search-api.netlify.app/",
      code: "https://github.com/niku419/react-recipe-search"
      },
      {
        title:"React translator detector",
        image: "https://github.com/niku419/react-translator-detector/blob/main/public/logo.png?raw=true",
        des: "A simple translator app made with react and google translation API which translates and detects any language into any other language...",
        redirect: "https://react-translator-detector.netlify.app/",
        code: "https://github.com/niku419/react-translator-detector"
      },
      {
        title:"React URL shortener",
        image: "https://raw.githubusercontent.com/niku419/react-firebase-URL-shortener/master/public/logo.ico",
        des: "A simple URL-shortener that shorterns your long URL and returns a simple short URL which will help you to share much easily, this app uses firebase's firestore for storing URLS and made with react...",
        redirect: "https://react-firebase-url-shorten.netlify.app/",
        code: "https://github.com/niku419/react-firebase-URL-shortener"
      },
      {
        title:"React socket chat",
        image: "https://image.flaticon.com/icons/png/512/402/402265.png",
        des: "A simple react socket chat app...",
        redirect: "https://react-socket-messaging.netlify.app/",
        code: "https://github.com/niku419/react-socket-messaging-app"
      },
      {
        title:"React omdb movie search",
        image: "https://www.pinclipart.com/picdir/big/67-677027_film-clipart-news-camera-circle-of-film-icon.png",
        des: "A simple movie search app which returns a set of movies, series related to your search along with some details of it...",
        redirect: "https://react-omdb-movie-search.netlify.app/",
        code: "https://github.com/niku419/react-omdb-movie-search"
      },
      {
        title:"React firebase gallery",
        image: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-5/177800/233-512.png",
        des: "A simple react firebase app that saves and uploads images to cloud...",
        redirect: "https://react-firebase-pictures.netlify.app/",
        code: "https://github.com/niku419/react-firebase-gallery"
      }
    ]
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
        <div className="row d-flex justify-content-center">
          {works.map((work, index) => (
            <div className="card body col-xs-12 col-sm-6 col-md-4 col-lg-3 p-0 m-lg-5 m-md-4 m-sm-4" key={index}>
              <div className="card-header p-0" style={{backgroundImage: "url(" + work.image + ")"}}>
                <div className="card-header-slanted-edge">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>
                </div>
              </div>
              <div className="card-body pb-0 d-flex justify-content-between flex-column">
                <h2 className="name" style={{color:"#b59d5a"}}>{work.title}</h2>
                <div className="bio" style={{color:"white"}}>{work.des}</div>
                <div className="d-flex justify-content-between">
                  <a className="info p-1" href={work.code}>
                    <div className="inline pr-1"><strong style={{paddingRight: "0.5rem"}}>Code</strong></div>
                    <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faCode}/>
                  </a>
                  <a className="info p-1" href={work.redirect}>
                    <div className="inline pr-1"><strong style={{paddingRight: "0.5rem"}}>View</strong></div>
                    <FontAwesomeIcon className="inline" size="lg" icon={faExternalLinkAlt}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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
