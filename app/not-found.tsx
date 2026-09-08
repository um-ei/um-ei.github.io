import { SiteHeader } from '../components/site/header';
import { assetPath } from '../lib/paths';

export default function NotFound() {
  return (
    <>
    <SiteHeader current="" />
    <main id="main-content" className="content-main site-width">
      <h1 className="section-title">Page not found</h1>
      <p className="research-intro">The page you’re looking for isn’t here.</p>
      <div className="text-links hero-links"><a href={assetPath('/')}>Return home <span aria-hidden="true">↗</span></a></div>
    </main>
    </>
  );
}
