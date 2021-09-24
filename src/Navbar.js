import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const remove = () => {
    setToggle(false)
  }
  return (
    <div>
      <section className="navbar">
        <div className="container flex">
          <h1>.Amir</h1>
          <ul className="nav">
            <li>
              <a href="#Home">خانه</a>
            </li>
            <li>
              <a href="#About">درباره من</a>
            </li>
            <li>
              <a href="#Projects">پروژه ها</a>
            </li>
            <li>
              <a href="#Contacts">ارتباط</a>
            </li>
          </ul>
          <div className="mobile-navbar">
            <i className="fas fa-bars" onClick={() => setToggle(true)} ></i>
            <div className="black " style={toggle ? { transform: "translateX(0%)" } : { transform: "translateX(100%)" }}>
              <i className="fas fa-times" onClick={() => setToggle(false)}></i>
              <div className="container grid">
                <ul className="mobile-nav">
                  <li>
                    <a href="#Home" onClick={remove}>خانه</a>
                  </li>
                  <li>
                    <a href="#About" onClick={remove}>درباره من</a>
                  </li>
                  <li>
                    <a href="#Projects" onClick={remove}>پروژه ها</a>
                  </li>
                  <li>
                    <a href="#Contacts">ارتباط</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Navbar;

