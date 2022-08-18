import React from "react";

const Home = () => {
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/prj">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/rezuwii">
                <b>GitHub</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br></br>
      <br></br>
      <div className="top-content">
        <h1>
          <span className="py">print("Hello World")</span>, I'm Putang.
          <br></br>
        </h1>
        <br></br>
        <span className="desc">
          I am 16 year old and I like to spend time<br></br> with computers
          trying to communicate with it.
        </span>
        <hr></hr>
      </div>
      <br />
      <br />
      <p>
        <img
          className="logocover"
          src="https://cdn.discordapp.com/attachments/990523749721833532/1008294261613142060/roundEvan.png"
          alt=""
        />
        <div className="textcover">
          <h1>About me.</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          similique ullam voluptatum repellat! Magni sequi, iste dolor nisi
          earum aut porro ipsam! Modi corporis, vel corrupti veritatis illum
          mollitia ame? lore
        </div>
      </p>
      <br />
      <br />
      <br />
      <div className="textcover-bottom">
        <h1>Technologies i use.</h1>
        <p>
          My list doesnt contain plethora of tech but there are few that im
          decent at. I know a lot more stuffs about other technologies that i
          didnt mention here because i dont think im very confident at those.
        </p>
        <table className="table table-dark table-sm">
          <tr>
            <td>
              <span className="table-title">Languages</span>
            </td>
            <td>Python, C++, Javascript / Typescript</td>
          </tr>
          <tr>
            <td>
              <span className="table-title">Tech</span>
            </td>
            <td>Nodejs, Reactjs, Expressjs, Nextjs</td>
          </tr>
          <tr>
            <td>
              <span className="table-title">Styles</span>
            </td>
            <td>Hugo, Bootstrap, Chakra</td>
          </tr>
          <tr>
            <td>
              <span className="table-title">Databases</span>
            </td>
            <td>PostgreSQL, MYSQL, MongoDB</td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <div className="textcover-bottom">
        <h1>Social Links.</h1>
        <p>
          <b>GitHub:</b>&zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
          <a href="https://github.com/rezuwii">https://github.com/rezuwii</a>
          <br />
          <b>Discord:</b>&zwnj; &zwnj; &zwnj; &zwnj;
          <a href="#">putang#2629</a>
          <br />
          <b>Spotify:</b>&zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
          <a href="https://open.spotify.com/user/uew2y2xsqr15udjfpb2e2lfbc?si=475ed6c327e64e0ei">
            shorturl.at/hknP9
          </a>
          <br />
          <b>LastFM:</b>&zwnj; &zwnj; &zwnj; &zwnj; &zwnj;
          <a href="https://www.last.fm/user/Rezuwifm">
            https://www.last.fm/user/Rezuwifm
          </a>
          <br />
        </p>
      </div>
      <br />
      <div className="footer">
        <a href="mailto:kk61468@gmail.com" className="btn">
          Contact Me
        </a>
      </div>
      <br />
      <br />
      <hr />
      <p className="below-line">
        <span className="creds">2022 - Putang</span>
        <span className="creds-right">
          Made with <a href="https://reactjs.org">React</a> and{" "}
          <a href="https://getbootstrap.com">Bootstrap</a>
        </span>
      </p>
    </>
  );
};

export default Home;
