document.addEventListener('DOMContentLoaded', function() {
  let currentScene = 0;
  const scenes = document.querySelectorAll('#poem > div');

  function showFirstScene() {
    scenes.forEach((scene, idx) => {
      scene.classList.remove('canh-on');
      scene.classList.add('canh-off');
    });
    currentScene = 0;
    scenes[0].classList.remove('canh-off');
    scenes[0].classList.add('canh-on');
  }

  function setClickHandler() {
    const activeScene = scenes[currentScene];
    const img = activeScene.querySelector('img');
    if (img) {
      img.addEventListener('click', handleClick);
    }
  }

  function handleClick() {
    const currentImg = scenes[currentScene].querySelector('img');
    if (currentImg) currentImg.removeEventListener('click', handleClick);

    scenes[currentScene].classList.remove('canh-on');
    scenes[currentScene].classList.add('canh-off');

    currentScene = (currentScene + 1) % scenes.length;

    scenes[currentScene].classList.remove('canh-off');
    scenes[currentScene].classList.add('canh-on');

    setClickHandler();
  }

  document.getElementById('start-fox').addEventListener('click', () => {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('poem').classList.remove('hidden');
    showFirstScene();
    setClickHandler();
  });

  if (!document.getElementById('poem').classList.contains('hidden')) {
    showFirstScene();
    setClickHandler();
  }

});