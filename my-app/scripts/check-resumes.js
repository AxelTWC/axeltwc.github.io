// Prevent resume PDFs from being copied into the public site.
const fs = require('fs');
const path = require('path');

const resumeDir = path.join(__dirname, '..', 'public', 'resumes');
const publicPdfs = fs.existsSync(resumeDir)
  ? fs.readdirSync(resumeDir).filter(file => /\.pdf$/i.test(file))
  : [];

if (publicPdfs.length) {
  console.error('[verify:resumes] Public resume PDFs found: ' + publicPdfs.join(', '));
  console.error('Move resume PDFs outside public/resumes before deploying.');
  process.exit(1);
}

console.log('[verify:resumes] No resume PDFs will be published.');
