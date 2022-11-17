import { fetchGoals } from './modules/api.js';
import { createGoal } from './modules/goal.js'

const goals = await fetchGoals();

for (const goal of goals) {
  document.querySelector('.goals')
    .appendChild(createGoal(goal));
}
