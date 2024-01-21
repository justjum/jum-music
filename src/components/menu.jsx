import Facebook from '../assets/icons/facebook-icon-green.svg'
import Instagram from '../assets/icons/instagram-icon-green.svg'
import Soundcloud from '../assets/icons/soundcloud-icon-green.svg'

export default function Header() {
    return (
            <div className='header'>
                <div className='menu-container'>
                    <div className='dropdown-menu'>
                        <ul>
                            <MenuItem text={"About"} />
                            <MenuItem text={"Gigs"} />
                            <MenuItem text={"Music"} />
                            <MenuItem text={"Contact"} />
                        </ul>
                    </div>
                </div>
                <div className='socials'>
                    <SocialMedia img={Facebook} />
                    <SocialMedia img={Instagram} />
                    <SocialMedia img={Soundcloud} />
                </div>
            </div>
    );
}       

function MenuItem(props) {
  return( 
  <li className='menu-item'>
    <a>{props.text}</a>
  </li>
  );
};

function SocialMedia(props) {
  return(
    <>
     <a href=""><img src={props.img} alt="" className='social-icon'/></a>
    </>
  );
}