// Récupération des éléments audio et bouton de chaque beat
const beats = document.querySelectorAll('.beat');
beats.forEach(beat => {
  const audio = beat.querySelector('audio');
  const button = beat.querySelector('button');

  // Ajout d'un événement au clic sur le bouton
  button.addEventListener('click', () => {
    // Redirection vers la page d'achat du beat
    window.location.href = 'achat.html';
  });

  // Ajout d'un événement à la fin de la lecture de l'audio
  audio.addEventListener('ended', () => {
    // Réinitialisation de la lecture
    audio.currentTime = 0;
    button.textContent = 'Acheter';
  });

  // Ajout d'un événement au début de la lecture de l'audio
  audio.addEventListener('play', () => {
    // Changement du texte du bouton
    button.textContent = 'En cours de lecture...';
  });
});