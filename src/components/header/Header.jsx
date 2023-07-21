import React, { useEffect, useRef } from "react";
import './header.css'
import Typed from "typed.js";
import CTA from "./CTA";
import ME from "../../assets/profile-pic.png"
import HeaderSocials from "./HeaderSocials";

// const Header = () => {
//   return (
// <header>
//   <div className="container header_container">
//     <h5>Hello I'm</h5>
//     <h1>Ronit Gupta</h1>
//     <h5 className="text-light">Fullstack Developer</h5>

//   </div>
// </header>
//   )
// }

const Example = ({ args_if_necessary }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Machine Learning",
        "Full-Stack Development",
        "Content Development",
        "ML/AI, Web_Dev, DSA"],
      typeSpeed: 40,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={typeTarget} />;
};

function Header() {
  return (
    <>
      <body>
        <header>
          <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Ronit Gupta</h1>
            <h5 className="text-light">
              <Example />
            </h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
              <img src={ME} alt="Profile_Pic"></img>
            </div>
            <a href="contact" className="scroll__down">Scroll Down</a>
          </div>
        </header>
      </body>
    </>
  );
}
export default Header