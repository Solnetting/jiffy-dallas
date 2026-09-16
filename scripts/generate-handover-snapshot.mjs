import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Offline snapshot generator. It reads local Git/project metadata only.
// It never contacts Notion, GitHub, or Vercel and never prints credentials.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = dirname(scriptDir);
const outputPath = join(repoRoot, 'HANDOVER-SNAPSHOT.md');

const git = (args, fallback = 'unavailable') => {
  try {
    return execFileSync('git', args, { cwd: repoRoot, encoding: 'utf8' }).trim() || fallback;
  } catch {
    return fallback;
  }
};

const projectPath = join(repoRoot, '.vercel', 'project.json');
let vercelProject = 'unavailable';
if (existsSync(projectPath)) {
  try {
    const project = JSON.parse(readFileSync(projectPath, 'utf8'));
    vercelProject = JSON.stringify({
      projectId: project.projectId,
      orgId: project.orgId,
      projectName: project.projectName,
    }, null, 2);
  } catch {
    vercelProject = 'present but unreadable';
  }
}

const lines = [
  '# Jiffy Dallas–Fort Worth — Technical Handover Snapshot',
  '',
  'Generated locally at ' + new Date().toISOString() + '.',
  '',
  'This snapshot is intentionally offline. It does not connect to Notion, GitHub,',
  'or Vercel and does not read or print credentials.',
  '',
  '## Repository',
  '',
  '- Root: ' + repoRoot,
  '- HEAD: ' + git(['rev-parse', '--verify', 'HEAD']),
  '- Branch/status: ' + git(['status', '--short', '--branch']),
  '- Origin: ' + git(['remote', 'get-url', 'origin']),
  '',
  '## Recent Git log',
  '',
  '~~~text',
  git(['log', '--oneline', '--decorate', '-12']),
  '~~~',
  '',
  '## Uncommitted diff',
  '',
  '~~~text',
  git(['diff', '--stat'], 'No unstaged diff'),
  '~~~',
  '',
  '## Vercel project association (IDs only)',
  '',
  '~~~json',
  vercelProject,
  '~~~',
  '',
  '## Local verification',
  '',
  'Run npm run build and git diff --check from the repository root.',
];

writeFileSync(outputPath, lines.join('\n') + '\n', 'utf8');
console.log('Wrote ' + outputPath);

