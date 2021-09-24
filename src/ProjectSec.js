import React from "react";

const ProjectSec = ({ data }) => {
  return (
    <section className="projects" id="Projects">
      <div className="container">
        <h1 className="text-center title">
          پروژه ها
          <div className="border"></div>
          <div className="border-md"></div>
        </h1>
        <div className="grid">
          {data.map(({ id, title, info, img, url }) => {
            return (
              <div className="card" key={id}>
                <a href={url}>
                  <img src={img} alt="" />
                  <div className="text">
                    <h2>{title}</h2>
                    <p>{info}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
