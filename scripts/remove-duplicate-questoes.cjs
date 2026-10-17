const fs = require('fs');
const path = require('path');

function removeRootQuestoes(content) {
  const lines = content.split('\n');
  const newLines = [];
  let inProva1 = false;
  let inProva2 = false;
  let inRootQuestoes = false;
  let braceCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track prova1 and prova2 blocks
    if (trimmed.startsWith('"prova1"') || trimmed.startsWith('"prova1":')) {
      inProva1 = true;
    }
    if (trimmed.startsWith('"prova2"') || trimmed.startsWith('"prova2":')) {
      inProva2 = true;
    }

    // Detect root questoes (not inside prova1 or prova2)
    if (trimmed === '"questoes": [' && !inProva1 && !inProva2) {
      inRootQuestoes = true;
      braceCount = 1;
      continue; // Skip this line
    }

    if (inRootQuestoes) {
      // Count braces to find end of array
      for (const ch of line) {
        if (ch === '[') braceCount++;
        else if (ch === ']') braceCount--;
      }
      if (braceCount === 0) {
        inRootQuestoes = false;
        // Skip the closing comma if present on next line
        if (i + 1 < lines.length) {
          const nextTrimmed = lines[i + 1].trim();
          if (nextTrimmed === '},' || nextTrimmed === '}') {
            i++; // Skip the closing brace/comma line
          }
        }
        continue;
      }
      continue; // Skip lines inside root questoes
    }

    // Reset inProva1/inProva2 when we close their objects
    if (inProva1 || inProva2) {
      for (const ch of line) {
        if (ch === '{') braceCount++;
        else if (ch === '}') braceCount--;
      }
      if (braceCount === 0) {
        inProva1 = false;
        inProva2 = false;
      }
    }

    newLines.push(line);
  }

  return newLines.join('\n');
}

const provasDir = path.join(__dirname, '..', 'src', 'data', 'provas');
const files = ['modulo1.js', 'modulo2.js', 'modulo3.js', 'modulo4.js', 'modulo5.js'];

files.forEach(file => {
  const filePath = path.join(provasDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = removeRootQuestoes(content);
  fs.writeFileSync(filePath, newContent);
  console.log(`Processed ${file}`);
});

console.log('All done!');