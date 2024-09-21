// import React, { useState } from 'react';
// import {Link} from 'react-scroll';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { data } from "../restApi.json";

// const Navbar = () => {
//     const [show, setShow] = useState(false)
//   return (
//     <nav>
//         <div className="logo">AKHIL</div>
//         <div className={show ? "navLinks showmenu": "navLinks"}>
//             <div className="links">
//                 {
//                     data[0].navbarLinks.map(element=>{
//                         return(
//                             <link to={element.link} key={element.id} spy={true} smooth={true} duration={500}>
//                                 {element.title}
//                             </link>
//                         )
//                     })
//                 }
//             </div>
//             <button className='menuBtn'>OUR MENU</button>
//         </div>
//         <div className="hamburger" onClick={ () => setShow(!show)}>
//             <GiHamburgerMenu/>
//         </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Correct component
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from "../restApi.json"; // Ensure this file has correct structure

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav>
            <div className="logo">AKHIL</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    {
                        data[0]?.navbarLinks.map(element => { // Optional chaining in case data is undefined
                            return (
                                <Link // Correct component
                                    to={element.link}
                                    key={element.id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    {element.title}
                                </Link>
                            )
                        })
                    }
                </div>
                <button className='menuBtn'>OUR MENU</button>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}

export default Navbar;
