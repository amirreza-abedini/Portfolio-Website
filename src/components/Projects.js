import { useEffect, useState } from "react";
import ProjectSec from "../ProjectSec";
import { useSpring, animated } from "react-spring";
let url = "https://amirreza-abedini.github.io/gh-pages-info/data/info.json";

const Projects = () => {
  const styles = useSpring({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  });
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let interval;
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((info) => {
        setData(info.posts);
        interval = setInterval(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  return (
    <div>
      <ProjectSec data={data} />
      {isLoading && (
        <animated.div className="black" style={styles}>
          <span className="loading">...Loading</span>
        </animated.div>
      )}
    </div>
  );
};

export default Projects;
