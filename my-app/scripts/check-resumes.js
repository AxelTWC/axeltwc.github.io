// Simple predeploy guard: ensure required resume PDFs exist under public/resumes
const fs = require('fs');
const path = require('path');

const resumeDir = path.join(__dirname, '..', 'public', 'resumes');
const required = ['ML_Intern_Resume.pdf', 'SW_Intern_Resume.pdf'];

if (!fs.existsSync(resumeDir)) {
  console.error('[verify:resumes] Missing directory: public/resumes');
  process.exit(1);
}

const missing = required.filter(f => !fs.existsSync(path.join(resumeDir, f)));
if (missing.length) {
  console.error('[verify:resumes] Missing resume PDFs: ' + missing.join(', '));
  console.error('Add the files to public/resumes before deploying.');
  process.exit(1);
}

console.log('[verify:resumes] All resume PDFs present.');
