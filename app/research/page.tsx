import { SiteHeader } from '../../components/site/header';
import type { Metadata } from 'next';
import publications from '../../data/publications.json';
import { assetPath } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Publications on robot learning, manipulation, equivariant learning, and embodied intelligence from Dian Wang and collaborators.',
};

function PublicationRecognition({ text }: { text: string }) {
  return text.split(/(,\s*)/).map((part, index) =>
    /\b(?:spotlight|award)\b/i.test(part) ? <strong key={index}>{part}</strong> : part,
  );
}

export default function Research() {
  return (
    <>
    <SiteHeader current="/research/" />
    <main id="main-content" className="content-main site-width" aria-label="Research projects">
          <h1 className="sr-only">Research</h1>
          <ol className="publication-list">
            {publications.map((paper) => (
              <li key={paper.order}>
                <article className="publication">
                  <a className="publication-image" href={paper.url} aria-label={paper.title} tabIndex={-1}>
                    <img src={assetPath(paper.thumbnail.src)} alt={`Research illustration for ${paper.title}`} width="240" height="156" loading="lazy" decoding="async" />
                  </a>
                  <div>
                    <h2><a href={paper.url}>{paper.title}</a></h2>
                    <p className="publication-authors">{paper.authors}</p>
                    <p className="publication-venue"><PublicationRecognition text={paper.venue.replace(' 🏆', '')} /></p>
                    {paper.extra && <p className="publication-note"><PublicationRecognition text={paper.extra} /></p>}
                    <div className="text-links publication-links" aria-label={`Resources for ${paper.title}`}>
                      {paper.links.map((link, index) => <a key={`${link.label}-${index}`} href={link.url}>{link.label === 'Webpage' ? 'Project' : link.label}</a>)}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
    </main>
    </>
  );
}
