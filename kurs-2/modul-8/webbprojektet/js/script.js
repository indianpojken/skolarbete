
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Researcha målgruppen');
    }, 4000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Skissa upp en design på papper');
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Gör skissen till pixel perfect mockup I Figma / XD');
    }, 3000);
  });
}

function step4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Koda');
    }, 3000);
  });
}

function step5() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Stackoverflow:a fel');
    }, 1000);
  });
}

function step6() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Testa produkten');
    }, 2000);
  });
}

function step7() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fira lyckat projekt');
    }, 1000);
  });
}

step1().then((resp) => {
  console.log(resp);
  step2().then((resp) => {
    console.log(resp);
    step3().then((resp) => {
      console.log(resp);
      step4().then((resp) => {
        console.log(resp);
        step5().then((resp) => {
          console.log(resp);
          step6().then((resp) => {
            console.log(resp);
            step7().then((resp) => {
              console.log(resp);
            });
          });
        });
      });
    });
  });
});
