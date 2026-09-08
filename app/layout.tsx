import type { Metadata } from 'next';
import { assetPath } from '../lib/paths';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'UMEI | Embodied Intelligence Lab', template: '%s | UMEI' },
  description: 'Embodied Intelligence Lab at the University of Macau. Research in robot learning, manipulation, and data-efficient learning.',
  icons: { icon: assetPath('/assets/brand/UMEI_bimanual_v31_original_red_wordmark.svg') },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <footer className="site-footer site-width">
          <p>UM Embodied Intelligence Lab</p>
          <p>
            <a href="https://www.um.edu.mo/">University of Macau</a>
            {' | '}
            <a href="https://fic.um.edu.mo/">Faculty of Information and Computing</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
