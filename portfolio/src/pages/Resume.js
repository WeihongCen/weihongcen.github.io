import { Header, Footer } from "../components/Components"

const resume = require('../Weihong-Cen-Resume.pdf')

function Resume() {
  return (
    <>
      <Header />
      <iframe class="fullscreen" src={resume} title="resume"></iframe>
      <Footer />
    </>
  );
}

export default Resume;
