import type { Metadata } from 'next';
import { SiteHeader } from '../../components/site/header';
import { faculty } from '../../data/people';

export const metadata: Metadata = {
  title: 'Getting Involved',
  description: 'PhD and master’s research opportunities with the UMEI Lab at the University of Macau, including PhD recruitment for Fall 2027.',
};

const phdSubject = 'Prospective PhD - Your Name';
const masterSubject = 'Prospective Master - Your Name';

export default function GettingInvolved() {
  return (
    <>
      <SiteHeader current="/getting-involved/" />
      <main id="main-content" className="content-main site-width" aria-label="Getting Involved">
        <div className="recruitment-content">
          <section className="recruitment-section" aria-labelledby="phd-heading">
            <h1 id="phd-heading" className="section-title">PhD Students</h1>
            <p>I am recruiting PhD students to join the lab in Fall 2027. I am especially interested in applicants with:</p>
            <ul>
              <li>Hands-on experience working with, building, repairing, or developing robotics hardware.</li>
              <li>Substantial experience with deep learning, imitation or reinforcement learning, and vision-language foundation models.</li>
              <li>Experience leading or contributing to publications in leading robotics or machine learning conferences or journals.</li>
            </ul>
            <p>If you are interested in working with me, please email {faculty.emailText} with the subject <strong>{phdSubject}</strong> and attach your CV.</p>
          </section>
          <section className="recruitment-section" aria-labelledby="master-heading">
            <h2 id="master-heading" className="section-title">Master Students</h2>
            <p>I am not currently accepting additional master’s students.</p>
            <p>If you will be joining the University of Macau in 2027 and are interested in working with me during your master’s studies, please email {faculty.emailText} with the subject <strong>{masterSubject}</strong> and attach your CV.</p>
          </section>
        </div>
      </main>
    </>
  );
}
