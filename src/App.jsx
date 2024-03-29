import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Root from './routes/root.jsx'
import Gigs from './routes/gigs.jsx'
import About from './routes/about.jsx'
import Music from './routes/music.jsx'
import Covers from './routes/covers.jsx'
import Originals from './routes/originals.jsx'
import Contact from './routes/contact.jsx'
import Login from './routes/login.jsx'
import ErrorPage from './error-page.jsx'
import Index from './routes/index.jsx'
import Facebook from './assets/icons/facebook-icon-grey.png'
import Instagram from './assets/icons/instagram-icon-grey.png'
import Soundcloud from './assets/icons/soundcloud-icon-grey.png'
import Spotify from './assets/icons/spotify-icon-grey.png'
import './App.css'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateStatus = () => {
    setIsLoggedIn((prev) => !prev)
  }

  

  return (
    <>
     <div className='container'>
        <div className="header">
            <div className="menu-container">
                <div className="dropdown-menu">
                <ul>
                    <MenuItem text={"about"} href={"/About"} />
                    <MenuItem text={"gigs"} href={"/Gigs"} />
                    <MenuItem text={"music"} href={"/Music"} />
                    <MenuItem text={"contact"} href={"/Contact"} />
                </ul>
                </div>
            </div>
            <div className="socials">
                <SocialMedia img={Facebook} href="http://www.facebook.com/thejumshow" />
                <SocialMedia img={Instagram} href="http://www.instagram.com/thejumshow" />
                <SocialMedia img={Spotify} href="http://open.spotify.com/artist/7MoklLsEE30ivhM27j8LTv" />
                <SocialMedia img={Soundcloud} href="http://www.soundcloud.com/flitters" />
            </div>
        </div>
        <div className='content'>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element = {<Index />} />
                  <Route path="/About" element = {<About />} />
                  <Route path="/Gigs" element = {<Gigs />} />
                  <Route path="/Music" element = {<Music />} />
                  <Route path="/Contact" element = {<Contact />} />
                  <Route path="/Music/Originals" element = {<Originals />} />
                  <Route path="/Music/Covers" element = {isLoggedIn ? <Covers />  : <Login change = {updateStatus}/>} />
                </Routes>
              </BrowserRouter>
        </div>
      </div>
    </>

  )
}

function MenuItem(props) {
  return (
    <li className="menu-item">
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

function SocialMedia(props) {
  return (
    <>
      <a href={props.href} target="_blank" rel="noreferrer">
        <img src={props.img} alt="" className="social-icon" />
      </a>
    </>
  );
}


export default App
