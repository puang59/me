import React from "react";

const Project = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn.discordapp.com/attachments/990523749721833532/1008296323470069770/putangbran.png"
              alt=""
              width="150"
              height="45"
              className="d-inline-block align-text-top"
            ></img>
          </a>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/prj">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/rezuwii">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br></br>
      <br></br>
      <div className="top-content">
        <h1>
          <span className="py">print("Hello World")</span>, These are my work.
          <br></br>
        </h1>
        <br></br>
        <span className="desc">
          These are some projects i have worked on. <br /> Most of my main
          production built projects are private due to personal reasons.
        </span>
        <hr></hr>
      </div>
      <br />
      <br />
      <br></br>
      {/* Cards */}
      <div className="crd">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <hr />
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <hr />
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <hr />
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <hr />
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <hr />
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <hr />
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Project;
