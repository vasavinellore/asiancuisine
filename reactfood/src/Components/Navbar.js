import React, {useState} from 'react'

import { TiTimes } from 'react-icons/ti';
import { CgMenuMotion } from 'react-icons/cg';


const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
   
  return (
    <div>
      <div className="navbar">
      <div className="nav-logo">
        <h2>FOODIE</h2>
        </div>
        <div className={Mobile ? "nav-links": "links"} onClick={()=> setMobile(false)}>
<ul>
    <a href=""><li className="lik">Home</li></a>
    <a href=""><li className="lik">About</li></a>
    <a href=""><li className="lik">Testimonials</li></a>
    <a href=""><li className="lik">Contact</li></a>
</ul>
        </div>
        <div className="nav_btn">
            <button>Booking Now</button>
        </div>
        <button className="toggle" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <TiTimes className='Close_icon' /> : <CgMenuMotion className='open_icon'/>}
          
        </button>
      </div>
    </div>
  )
}

export default Navbar
