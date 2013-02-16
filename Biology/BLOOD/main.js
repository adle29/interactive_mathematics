    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
 
var canvas = document.getElementById('canvas');
var context = canvas.getContext	('2d');
var scene = 0;
var topscore=0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight-160;