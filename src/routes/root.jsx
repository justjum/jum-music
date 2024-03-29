import { useState } from 'react'
import Facebook from '../assets/icons/facebook-icon-green.svg'
import Instagram from '../assets/icons/instagram-icon-green.svg'
import Soundcloud from '../assets/icons/soundcloud-icon-green.svg'
import Spotify from '../assets/icons/spotify-icon-green.svg'
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
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
                    <MenuItem text={"About"} href={"/About"} />
                    <MenuItem text={"Gigs"} href={"/Gigs"} />
                    <MenuItem text={"Music"} href={"/Music"} />
                    <MenuItem text={"Contact"} href={"/Contact"} />
                </ul>
                </div>
            </div>
            <div className="socials">
                <SocialMedia img={Facebook} href="http://www.facebook.com/thejumshow" />
                <SocialMedia img={Instagram} href="http://www.instagram.com/thejumshow" />
                <SocialMedia img={Spotify} href="http://www.spotify.com/flitters-music" />
                <SocialMedia img={Soundcloud} href="http://www.soundcloud.com/flitters" />
            </div>
        </div>
        <div className='content'>
            <Outlet loggedIn={isLoggedIn}/>
        </div>
      </div>

    </>

  );
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
      <Link to={props.href} target="_blank">
        <img src={props.img} alt="" className="social-icon" />
      </Link>
    </>
  );
}
