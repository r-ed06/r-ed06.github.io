"use strict";

// Declaration des variables permettant de cibler certains elements du HTML par leur classe
var bouton_kitties = document.querySelector('.kitties');
var bouton_puppies = document.querySelector('.puppies');
var bouton_kids = document.querySelector('.kids');
var h4_kitties = document.querySelector('.h4kitties');
var h4_puppies = document.querySelector('.h4puppies');
var h4_kids = document.querySelector('.h4kids');
bouton_kitties.addEventListener('click', function () {
  smooth_scroll('.h4kitties', 2000);
});
bouton_puppies.addEventListener('click', function () {
  smooth_scroll('.h4puppies', 2000);
});
bouton_kids.addEventListener('click', function () {
  smooth_scroll('.h4kids', 2000);
}); // Fonction pour aller à un endroit donné, en un temps donné

function smooth_scroll(target, duration) {
  var target = document.querySelector(target);
  var target_position = target.getBoundingClientRect().top - 60;
  /* Prend la position du haut de l'element par rapport au haut de l'ecran de l'utilisateur, 
  très important sinon la distance parcourue sera inexacte et le décalage restera */

  var start_position = window.pageYOffset;
  var start_time = null;

  function animation_scroll(current_time) {
    if (start_time === null) start_time = current_time;
    var time_elapsed = current_time - start_time;
    var run = ease_it(time_elapsed, start_position, target_position, duration);
    window.scrollTo(0, run);
    if (time_elapsed < duration) requestAnimationFrame(animation_scroll);
  } // gizma.com/easing/ Fonction permettant un scroll progressif pour donner un effet d'acceleration


  function ease_it(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation_scroll);
}