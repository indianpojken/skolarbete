function letsDance(danceStyle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (danceStyle === 'polka') {
        resolve('Yes, polka is my thing!');
      } else {
        reject('That ain\'t my style...')
      }
    }, 2000);
  });
}

letsDance('waltz')
  .then((response) => console.log(response))
  .catch((diss) => console.log(diss));

(async () => {
  try {
    console.log(await letsDance('polka'));
  } catch (err) {
    console.log(err);
  }
})();
