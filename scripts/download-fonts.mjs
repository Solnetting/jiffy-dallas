import { mkdir, writeFile } from 'node:fs/promises';
const fonts = [
  ['inter', 'Inter:wght@400;500;600;700;800;900'],
  ['poppins', 'Poppins:ital,wght@0,600;0,700;0,800;1,900'],
  ['outfit', 'Outfit:wght@900'],
  ['geist', 'Geist:wght@500;700'],
];
const dir = new URL('../assets/fonts/', import.meta.url);
await mkdir(dir, { recursive: true });
let result = '';
for (const [name, query] of fonts) {
  const response = await fetch(`https://fonts.googleapis.com/css2?family=${query}&display=swap`, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/131.0.0.0 Safari/537.36' } });
  if (!response.ok) throw new Error(`${name}: ${response.status}`);
  const css = await response.text();
  const blocks = css.match(/\/\* latin \*\/[\s\S]*?\}/g) || css.match(/@font-face[\s\S]*?\}/g);
  let i = 0;
  for (let block of blocks) {
    const remote = block.match(/url\(([^)]+)\)/)[1];
    const file = `${name}-${i++}.woff2`;
    const data = await fetch(remote);
    if (!data.ok) throw new Error(file);
    await writeFile(new URL(file, dir), Buffer.from(await data.arrayBuffer()));
    result += block.replace(remote, `./${file}`) + '\n';
  }
}
await writeFile(new URL('fonts.css', dir), result);
console.log('Downloaded local fonts');
