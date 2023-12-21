import { Header, Footer, GallaryCard } from "../components/Components"

const airstrafe_logo = require('../images/airstrafe-logo.png')
const jpl_logo = require('../images/jpl-logo.png')
const unity_logo = require('../images/unity-logo.png')

function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <GallaryCard 
          title="Airstrafe Interactive"
          date="(Jun 2023 - Sep 2023)"
          description={[
            "Memory optimization",
            "Mac integration",
            "Remote automation"
          ]}
          image={airstrafe_logo}
          link="/portfolio/airstrafe"
        />
        <GallaryCard 
          title="Jet Propulsion Laboratory"
          date="(Jun - Sep 2022, 2021, 2020)"
          description={[
            "Climate model analysis",
            "Covid to air quality correlation",
            "Exoplanet period derivation"
          ]}
          image={jpl_logo}
          link="/portfolio/JPL"
        />
        <GallaryCard 
          title="Game Development"
          date="(2020)"
          description={[
            "Unity engine development",
            "Multiplayer networking",
            "Photoshop/music sequencer"
          ]}
          image={unity_logo}
          link="/portfolio/games"
        />
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
