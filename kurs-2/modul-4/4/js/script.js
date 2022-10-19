const maxScore = 3;
setup();

let score = {
  player: 0,
  computer: 0,
};

function render(hands) {
  const icon = { rock: '✊', paper: '🤚', scissor: '✌', };

  const scoreboard = {
    player: document.querySelector('#score_player'),
    computer: document.querySelector('#score_computer'),
  };

  const hand = {
    player: document.querySelector('#hand_player'),
    computer: document.querySelector('#hand_computer'),
  };

  scoreboard.player.innerText = score.player;
  scoreboard.computer.innerText = score.computer;

  hand.player.innerText = icon[hands.player];
  hand.computer.innerText = icon[hands.computer];

  if (score.player === maxScore || score.computer === maxScore) {
    document.querySelector('.ui').style.display = 'none';
    document.querySelector('.hud__hands').style.display = 'none';
    document.querySelector('.hud__winner').style.display = 'flex';

    document.querySelector('#winner')
      .innerText = score.player === maxScore ? '🙂' : '🤖';
  }
}

function play(hand) {
  const computer = ['rock', 'paper', 'scissor'][Math.round(Math.random() * 2)];

  if (hand === "rock" && computer === "scissor"
    || hand === "paper" && computer === "rock"
    || hand === "scissor" && computer === "paper") {
    score.player += 1;
  } else if (hand !== computer) {
    score.computer += 1;
  }

  render({ player: hand, computer: computer });
}

function restart() {
  score.player = 0;
  score.computer = 0;

  document.querySelector('#hand_player').innerText = '🙂';
  document.querySelector('#hand_computer').innerText = '🤖';

  document.querySelector('.ui').style.display = 'flex';
  document.querySelector('.hud__hands').style.display = 'flex';
  document.querySelector('.hud__winner').style.display = 'none';
}

function setup() {
  document.querySelector('#rock')
    .addEventListener('click', () => { play('rock'); });

  document.querySelector('button#paper')
    .addEventListener('click', () => { play('paper'); });

  document.querySelector('button#scissor')
    .addEventListener('click', () => { play('scissor'); });

  document.querySelector('button#restart')
    .addEventListener('click', () => { restart(); });
}
