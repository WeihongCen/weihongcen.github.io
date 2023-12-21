import { Header, Footer, GameCard } from "../components/Components"
import '../components/Article.css';

const blink_img = require('../images/b-img.png')
const jtb_img = require('../images/jtb-img.png')
const cs_img = require('../images/cs-img.png')

function Games() {
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>Game Development</h1>
          <p>
            I have some experience with using the Unity game engine.
          </p>
          <p>
            During the pandemic, I had some free time to dive into indie game
            development. I learned everything from scratch, from the art and 
            music to the C# language. From this experience, I learned how to use
            Photoshop, music sequencers, and networking servers like Mirror and
            Photon.
          </p>
          <p>
            Below are some of the games I've made.
          </p>
          <GameCard 
            image={blink_img}
            name="Blink"
            link="https://weihong-cen.itch.io/blink"
          />
          <GameCard 
            image={jtb_img}
            name="Journey To The Black Hole"
            link="https://weihong-cen.itch.io/journey-to-the-black-hole"
          />
          <GameCard 
            image={cs_img}
            name="Chroma Slide"
            link="https://weihong-cen.itch.io/chroma-slide"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Games;
