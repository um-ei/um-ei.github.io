import { assetPath } from '../../lib/paths';

const links = [
  { href: '/', label: 'Home' },
  { href: '/lab/', label: 'Lab' },
  { href: '/research/', label: 'Research' },
  { href: '/getting-involved/', label: 'Getting Involved' },
];

export function SiteHeader({ current }: { current: string }) {
  return (
    <header className="site-header">
      <div className="header-inner site-width">
        <a className="wordmark" href={assetPath('/')} aria-label="UMEI home">
          <img src={assetPath('/assets/brand/UMEI_bimanual_v31_original_red_wordmark.svg')} width="1220" height="392" alt="UMEI" loading="eager" />
        </a>
        <nav aria-label="Main navigation">
          {links.map(({ href, label }) => {
            const active = href === current;
            return <a href={assetPath(href)} key={href} aria-current={active ? 'page' : undefined}>{label}</a>;
          })}
        </nav>
      </div>
    </header>
  );
}
