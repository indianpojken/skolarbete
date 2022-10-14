// 1
document.querySelector('.art-1 > h3').innerText = 'Potato';

// 2
document.querySelectorAll('a').forEach((link) => {
  if (link.innerText === 'Home') {
    link.innerText = 'Start';
  }
})

// 3
document.querySelectorAll('a').forEach((link) => {
  if (link.innerText === 'Contact') {
    link.innerText = 'Mail Us';
  }
})

// 4
document.querySelector('.art-2 > p').innerText = 'The quick brown fox jumps over the lazy dog.';

// 5
const art2Button = document.querySelector('.art-2 button');

art2Button.style.backgroundColor = '#eee';
art2Button.style.color = '#000';

// 6
document.querySelector('.art-2 > figure').style.backgroundColor = '#eee';

// 7
document.querySelector('footer > section > article:nth-child(2) > p')
  .innerHTML = 'Sinus Snowboards<br>Raketvägen 14<br>813 37 MÅNEN';

// 8
document.querySelectorAll('p').forEach((p) => {
  p.style.color = 'gray';
})

// 9
document.querySelectorAll('button').forEach((button) => {
  button.innerText = 'Add to cart';
})

// 10
document.querySelectorAll('header > nav > a').forEach((link) => {
  if (link.innerText === 'Start') {
    link.classList.add('active');
  }
})

// 14
document.querySelector('.logo')
  .addEventListener("click", () => { console.log('found you!'); });

// 15
const articles = document.querySelectorAll('main > article');

articles.forEach((article, index) => {
  const title = articles[index].getElementsByTagName('h3')[0].innerText;
  
  article.addEventListener('click', () => {
    console.log(`Hi, Im article ${title}`);
  })
})

// 11
document.querySelector('.logo').classList.remove('logo');
