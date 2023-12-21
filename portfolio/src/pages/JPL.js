import { Header, Footer } from "../components/Components"
import '../components/Article.css';

const earth_FUS = require('../images/earth-FUS.png')
const earth_fourier = require('../images/earth-fourier.png')
const aq_str = require('../images/aq-str.png')
const covid_sah = require('../images/covid-sah.png')
const covid_bs = require('../images/covid-bs.png')
const cm_region_trend = require('../images/cm-region-trend.png')

const fourier_paper = require('../jpl-paper.pdf')

function JPL() {
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>Jet Propulsion Laboratory</h1>
          <p>
            I interned as a student researcher in Summer from 2020 to 2022. Most
            of my work is in compiling and analyzing data.
          </p>
          <p>
            One of my research subjects is to take image data of exoplanets and
            convert them into useful information. One issue with modern 
            satellites is that they are not powerful enough to give us a clear
            image of far-away exoplanets. As a result, we would need to work 
            with single-pixel observations.
          </p>
          <p>
            To analyze the time series of a single value, we could apply signal
            processing techniques. Fourier analysis is particularly helpful.
            Take Earth for an example:
          </p>
          <figure>
            <img src={earth_FUS} alt="Earth FUS"/>
            <figcaption>
              Simulated Earth's upward radiation
            </figcaption>
          </figure>
          <p>
            The surface of Earth is part land and part water. Earth's landmass
            reflects much more radiation than its oceans. This means that as the
            Earth rotates, the total radiation we capture would be different 
            depending on the side we're facing.
          </p>
          <figure>
            <img src={earth_fourier} alt="Earth period estimation"/>
            <figcaption>
              Probable rotational periods of Earth
            </figcaption>
          </figure>
          <p>
            Since Earth rotates every 24 hours, we will see the same side at a
            fixed interval. This information can be obtained by using Fourier 
            transform. The above figure illustrates the results of applying such
            a technique to a simulated Earth's shortwave upward flux 
            time series. We can use the same method to find the rotational
            periods of other planets without the need for sophisticated images.
          </p>
          <iframe class="fullscreen" src={fourier_paper} title="paper"></iframe>
          <p>
            In another project, I studied the effects that the pandemic 
            shutdowns had on the global air quality.
          </p>
          <p>
            Using a stringency index that evaluates the intensity of policies in
            containment, economy, vaccination, etc., we could see how varying
            policies could have varying influences on air quality.
          </p>
          <figure>
            <img src={aq_str} alt="PM 2.5 concentration difference"/>
            <figcaption>
              Change of PM 2.5 concentration (&mu;g/m<sup>3</sup>) with labeled 
              stringency index
            </figcaption>
          </figure>
          <p>
            States with more stringent government regulations like California, 
            Maine, and Rhode Island have less pollution. On the other hand, 
            States like Michigan and Oklahoma contain more locations with higher 
            PM 2.5 concentration.
          </p>
          <p>
            Similarly, I analyzed the relationship between the spread of 
            Covid-19 cases and the intensity of the government response. 
          </p>
          <figure>
            <img src={covid_sah} 
              alt={`Positive Covid Test Proportion in States by Stay at Home 
              Orders`}/>
            <figcaption>
              Data from multiple states labeled by status of stay at home orders
            </figcaption>
          </figure>
          <figure>
            <img src={covid_bs} 
              alt={`Positive Covid Test Proportion in States by Business 
              Shutdown Status`}/>
            <figcaption>
              Data from multiple states labeled by status of business shutdowns
            </figcaption>
          </figure>
          <p>
            Generally, states with more stringent policies see a lower infection
            rate. However, there are exceptions like New York, which seems to be 
            well below the national average even with no business shutdowns.
          </p>
          <p>
            Lastly, I studied the CMIP6 climate models how different input 
            parameters, such as atmospheric CO2, water vapor, and radiation
            would affect their outputs. I also classified the comparison by
            region.
          </p>
          <figure>
            <img src={cm_region_trend} 
              alt={`Regional tempanomaly`}/>
            <figcaption>
              Regional temperature anomaly
            </figcaption>
          </figure>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default JPL;
