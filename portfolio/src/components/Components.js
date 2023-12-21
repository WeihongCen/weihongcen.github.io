import './Gallary.css';
import './Marginalia.css';
import './Game.css';
import { Link } from 'react-router-dom';

const linkedin_logo = require('../images/linkedin-logo.png')

export function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/resume">RESUME</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer>
        <nav>
          {/* Logo from LinkedIn */}
          <a href="https://www.linkedin.com/in/weihong-cen/" rel="noopener">
            <img src={linkedin_logo} alt="linkedin logo" /></a>
        </nav>
      </footer>
    </>
  );
}

export function GallaryCard(props) {
  return (
    <>
      <Link to={`${props.link}`}>
        <div class="gallary-card">
          <img src={props.image} alt={props.title}/>
          <div class="gallary-content">
            <h1>{props.title}</h1>
            <h2><i>{props.date}</i></h2>
            {props.description.map((str, _) => (
              <p>{str}</p>
            ))}
          </div>
          <button>Read More</button>
        </div>
      </Link>
    </>
  );
}

export function GameCard(props) {
  return (
    <>
      <div class="game-card">
        <img src={props.image} alt={props.name}/>
        <div class="game-description">
          <h1>{props.name}</h1>
          <Link to={`${props.link}`}>
            <button>Play on itch.io</button>
          </Link>
        </div>
      </div>
    </>
  );
}