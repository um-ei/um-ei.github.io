// Set this when the future GitHub Pages repository uses a project subpath.
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
