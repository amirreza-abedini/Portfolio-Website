import { useState } from "react";
import "./type.css";
import Typing from "./Typing";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Showcase = () => {
  const styles = useSpring({
    from: {
      transform: "translateX(100%)",
    },
    to: {
      transform: "translateX(0)",
    },
  });
  const imgStyles = {
    from: {
      transform: "translateX(-100%)",
    },
    to: {
      transform: "translateX(0%)",
    },
  };
  // const [change, setChange] = useState("");
  const [count, setCount] = useState(1);
  const remove = {
    blink: true,
  };
  let change = ["برنامه نویس وبسایت هستم", "طراح UI هستم"];
  let text_1 = `${change[0]}`;
  let text_2 = `${change[1]}`;

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="personal-info">
          <animated.p className="hello" style={styles}>
            سلام من
          </animated.p>
          <animated.h1 style={styles}>
            امیررضا عابدینی <span className="down">هستم</span>
          </animated.h1>
          <animated.h2 style={styles}>
            {count ? (
              <Typing
                remove={remove}
                text_1={text_1}
                text_2={text_2}
                setCount={setCount}
              />
            ) : (
              ""
            )}
          </animated.h2>
          <animated.p style={styles} className="short-about">
            من بیشتر از 1 سال تجربه برنامه نویسی دارم و مهارت اصلی من در کد
            نویسی است. من یک برنامه نویس و طراح UI و UX هستم.
          </animated.p>
          <a href="./resume.pdf" download>
            <animated.button
              style={styles}
              className="download btn btn-outline"
            >
              دانلود رزومه

            </animated.button>
          </a>
        </div>
        <animated.img
          style={imgStyles}
          src="./portfolio.png"
          alt=""
        ></animated.img>
      </div>
    </section>
  );
};

export default Showcase;
