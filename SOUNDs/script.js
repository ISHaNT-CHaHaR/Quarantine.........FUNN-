function play(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   if (!audio) return; /// Stop the function immediately.

   audio.currentTime = 0; /// reset to the start.

   audio.play();

   key.classList.add('playing');
}

function rermoveTransition(e) {
   if (e.propertyName !== 'transform') return; /// skip if nit transform property.

   this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', rermoveTransition));

window.addEventListener('keydown', play);
