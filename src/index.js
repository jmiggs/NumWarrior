import NumWarrior from './game';


document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game');
  let game = new NumWarrior(canvas);
  
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      document.getElementById('enter').style.display = 'none';
      game.run();
    }

  })
})
  

  
