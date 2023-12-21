import { Header, Footer } from "../components/Components"
import '../components/Article.css';

const pre_addressable = require('../images/pre-addressable.png')
const post_addressable = require('../images/post-addressable.png')
const jenkins_bot = require('../images/jenkins-bot.png')
const jenkins_log = require('../images/jenkins-log.png')
const electricity_demo = require('../images/electricity-demo.png')
const electricity_visual = require('../images/electricity-visual.png')

function Airstrafe() {
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>Airstrafe Interactive</h1>
          <p>
            I interned at Airstrafe Interactive for the summer of my Sophomore 
            year. During my time there, I worked on a game called Saleblazers.
          </p>
          <iframe 
            width="800" 
            height="450" 
            src="https://www.youtube.com/embed/VkKcCM7df00?si=37DjR6Bth2NoDCYe" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share" 
            allowFullScreen={true}>
          </iframe>
          <p>
            My first task is to reduce the game's memory usage. On a large 
            project like this, all the texture and mesh data tend to consume a
            lot of running memory. I worked on the Addressable system, which
            loads and unloads resources as needed.
          </p>
          <figure>
            <img src={pre_addressable} alt="pre-addressable memory"/>
            <figcaption>
              ~11 GB memory usage before addressable implementation
            </figcaption>
          </figure>
          <p>
            When I first started, it was normal for the game to use more than 10
            GB of memory. This causes multiple issues. The artists on the team
            have to pause their progress on improving visual quality due to the
            memory constraint, and players who have lower-end computers will be
            dissuaded from buying our product.
          </p>
          <figure>
            <img src={post_addressable} alt="post-addressable memory"/>
            <figcaption>
              ~5 GB memory usage after addressable implementation
            </figcaption>
          </figure>
          <p>
            By the end of my internship, I was able to reduce memory usage by
            more than half.
          </p>
          <p>
            I also created a Mac build pipeline for the game. I wrote the bash 
            build actions for our Jenkins server. With the new pipeline, we are 
            able to expand our game to Apple users.
          </p>
          <p>
            On top of that, I scripted a bot for us to remotely control the
            build server. The bot featured build commands and diagnostic tools,
            which helped the production flow immensely. 
          </p>
          <figure>
            <img src={jenkins_bot} alt="Jenkins bot"/>
            <figcaption>
              Example of a Jenkins bot build request
            </figcaption>
          </figure>
          <p>
            Previously, engineers would have to stay in the office to build a 
            specific game version. Remote QAs would also need to contact 
            in-office staff for build-related issues. In the event that a build 
            failed at night, someone would need to return to the office to 
            troubleshoot. My bot helped circumvent these issues.
          </p>
          <figure>
            <img src={jenkins_log} alt="Jenkins log"/>
            <figcaption>
              Saved logs for debugging
            </figcaption>
          </figure>
          <p>
            Lastly, I helped with debugging/optimimzation tasks. Of the tasks,
            I'm most proud of reworking our game's electricity system.
          </p>
          <figure>
            <img src={electricity_demo} alt="electricity rework"/>
            <figcaption>
              Reworked electricity system in game
            </figcaption>
          </figure>
          <p>
            The newly implemented electricity system is more optimized by using
            a graph to represent the power grid. I also added many more
            features, including cross-chunk state change support, wire editing
            UI, save/load of power grids, etc. 
          </p>
          <figure>
            <img src={electricity_visual} alt="electricity visual"/>
            <figcaption>
              More intuitive UI and more options for building
            </figcaption>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Airstrafe;
