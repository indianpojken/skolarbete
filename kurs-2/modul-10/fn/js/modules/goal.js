import { fetchTargets } from './api.js';

function createGoal(goal) {
  const goalElem = document.createElement('article');
  goalElem.className = 'goals__goal';

  const code = document.createElement('h2');
  code.className = 'goal__code';
  code.textContent = goal.code;

  const title = document.createElement('h3');
  title.className = 'goal__title';
  title.textContent = goal.title;

  const description = document.createElement('p');
  description.className = 'goal__description';
  description.textContent = goal.description;

  const targets = document.createElement('section');
  targets.className = 'goal__targets hidden';

  const targetsButton = document.createElement('button');
  targetsButton.className = 'button';
  targetsButton.textContent = 'Show targets';

  targetsButton.addEventListener('mouseover', async () => {
    if (targets.innerHTML === "") {
      for (const target of await fetchTargets(goal.code)) {
        targets.appendChild(createTarget(target));
      }
    }
  });

  targetsButton.addEventListener('click', () => {
    targetsButton.textContent =
      targets.className.includes('hidden')
        ? "Hide targets"
        : "Show targets";

    goalElem.classList.toggle('goals__goal--full');
    targets.classList.toggle('hidden');
  });

  goalElem.append(code, title, description, targets, targetsButton);

  return goalElem;
}

function createTarget(target) {
  const targetElem = document.createElement('article');
  targetElem.className = 'target';

  const code = document.createElement('p');
  code.className = 'target__code';
  code.textContent = target.code;

  const description = document.createElement('p');
  description.className = 'target__description';
  description.textContent = target.description;

  targetElem.append(code, description);

  return targetElem;
}

export { createGoal };
