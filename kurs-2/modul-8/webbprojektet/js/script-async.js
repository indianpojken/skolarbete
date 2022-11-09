const steps = [
  { message: 'Researcha målgruppen', duration: 4000, },
  { message: 'Skissa upp en design på papper', duration: 2000, },
  { message: 'Gör skissen till pixel perfect mockup I Figma / XD', duration: 3000, },
  { message: 'Koda', duration: 3000, },
  { message: 'Stackoverflow:a fel', duration: 1000, },
  { message: 'Testa produkten', duration: 2000, },
  { message: 'Fira lyckat projekt', duration: 1000, },
];

function stepList(steps) {
  let step = 0;

  return (() => {
    return new Promise((resolve, reject) => {
      if (step === steps.length) reject('Slut på steg');
      setTimeout(() => {
        resolve(steps[step++].message);
      }, steps[step].duration);
    });
  });
}

(async () => {
  const webProject = stepList(steps);

  try {
    for (_ of steps) {
      console.log(await webProject());
    }

    console.log(await webProject());
  } catch (err) {
    console.log(`Error: ${err}.`);
  }
})();
