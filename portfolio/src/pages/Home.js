import '../App.css';
import { Link } from 'react-router-dom';

const portfolio_icon = require('../images/portfolio_icon.png')
const resume_icon = require('../images/resume-icon.png')

function NavButton(props) {
  return (
    <Link to={`/${props.link}`}>
      <img class="icon" src={props.src} alt={`${props.link}`} />
      <p>{props.link.toUpperCase()}</p>
    </Link>
  )
}

function Home() {
  return (
    <>
      <div class="introduction">
        <section>
          <h1>&#128075; Hello, I'm</h1>
          <h1>William Cen</h1>
          <h1>Caltech CS Junior</h1>
        </section>
        <aside>
          <nav>
            <ul>
              <li>
                <NavButton link="portfolio" src={portfolio_icon} />
              </li>
              <li>
                <NavButton link="resume" src={resume_icon} />
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Home;
