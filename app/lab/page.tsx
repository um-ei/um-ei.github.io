import { SiteHeader } from '../../components/site/header';
import type { Metadata } from 'next';
import { faculty, members } from '../../data/people';
import { assetPath } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Meet the faculty and students of UMEI, the Embodied Intelligence Lab at the University of Macau.',
};

export default function Lab() {
  return (
    <>
    <SiteHeader current="/lab/" />
    <main id="main-content" className="content-main site-width">
      <section aria-labelledby="faculty-heading">
        <h1 id="faculty-heading" className="section-title">Faculty</h1>
        <div className="people-grid">
          <article className="member">
            <a className="member-photo-link" href={faculty.website} aria-label="Dian Wang’s personal website">
              <img className="portrait" src={assetPath(faculty.image)} width="180" height="180" alt="Dian Wang" />
            </a>
            <div className="faculty-info">
              <h2><a href={faculty.website}>{faculty.name}</a></h2>
              <p className="person-role">{faculty.role}</p>
            </div>
          </article>
        </div>
      </section>
      <section className="members-section" aria-labelledby="members-heading">
        <h2 id="members-heading" className="section-title">Members</h2>
        <div className="people-grid">
          {members.map((member) => {
            const portrait = member.image ? (
              <img className={`portrait ${member.imageClass}`} src={assetPath(member.image)} width="180" height="180" alt={member.name} />
            ) : (
              <div className="portrait portrait-placeholder" aria-hidden="true"><span aria-hidden="true">{member.initials}</span></div>
            );
            return (
              <article className="member" key={member.name}>
                {member.website ? <a className="member-photo-link" href={member.website} aria-label={`${member.name}’s website`}>{portrait}</a> : portrait}
                <h3>{member.website ? <a href={member.website}>{member.name}</a> : member.name}</h3>
                <p className="person-role">{member.role}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
    </>
  );
}
