import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const output = 'dist/client';
const manifest = JSON.parse(readFileSync('dist/server/vinext-prerender.json', 'utf8'));
const routes = ['/', '/lab', '/research', '/getting-involved'];

// The pinned starter redirects slash routes before prerendering. Export without
// redirects, then provide directory indexes for portable static-host URLs.
for (const route of routes) {
  const result = manifest.routes.find((entry) => entry.route === route);
  if (result?.status !== 'rendered') throw new Error(`Route was not exported: ${route}`);
  if (route === '/') continue;
  const filename = route.slice(1);
  const directory = join(output, filename);
  mkdirSync(directory, { recursive: true });
  copyFileSync(join(output, `${filename}.html`), join(directory, 'index.html'));
  const rsc = join(output, `${filename}.rsc`);
  if (existsSync(rsc)) copyFileSync(rsc, join(directory, 'index.rsc'));
}
writeFileSync(join(output, '.nojekyll'), '');
console.log('Static export verified: Home, Lab, Research, and Getting Involved; directory URLs ready.');
