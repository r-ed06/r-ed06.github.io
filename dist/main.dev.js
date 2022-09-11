"use strict";

var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');
var nav4 = document.getElementById('nav4');
nav1.addEventListener('click', function () {
  smooth_scroll('.section_bio', 2000);
});
nav2.addEventListener('click', function () {
  smooth_scroll(".section_journey", 2000);
});
nav3.addEventListener('click', function () {
  smooth_scroll(".section_knowledge", 2000);
});
nav4.addEventListener('click', function () {
  smooth_scroll(".section_chance", 2000);
}); // Fonction pour aller à un endroit donné, en un temps donné

function smooth_scroll(target, duration) {
  var target = document.querySelector(target);
  var target_position = target.getBoundingClientRect().top - 5;
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