import { SiteHeader } from '../components/site/header';
import { assetPath } from '../lib/paths';

export default function Home() {
  return (
    <>
    <SiteHeader current="/" />
    <main id="main-content" className="home-main site-width">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <h1 id="home-title">Embodied<br /><span>Intelligence</span><br />Lab</h1>
          <p className="home-intro">The University of Macau Embodied Intelligence (UMEI) Lab studies how robots can learn to perceive, reason, and act in the physical world.</p>
          <p className="home-description">Our research focuses on embodied AI, robot learning, and robotic manipulation, with an emphasis on data-efficient learning and generalization.</p>
          <div className="text-links hero-links">
            <a href={assetPath('/research/')}>Our research <span aria-hidden="true">↗</span></a>
            <a href={assetPath('/lab/')}>Meet the lab <span aria-hidden="true">↗</span></a>
            <a href={assetPath('/getting-involved/')}>Getting Involved <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={assetPath('/assets/brand/UMEI_bimanual_v54_matching_faces.svg')} width="671" height="304" alt="UMEI — Embodied Intelligence Lab, University of Macau" fetchPriority="high" loading="eager" />
        </div>
      </section>
    </main>
    </>
  );
}
