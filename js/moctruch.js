var bigContainer = document.getElementById('big-container');
var container = document.getElementById('container');
var output = document.getElementById('output');
var actions = {};

var svgOverlay = "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='560'> " + "<defs> " + "<filter id='f1' x='0' y='0'> " + "<feGaussianBlur in='SourceGraphic' stdDeviation='25' /> " + "</filter> " + "</defs> " + "<foreignObject width='100%' height='100%' filter='url(#f1)'> " + bigContainer.innerHTML + "</foreignObject> " + "</svg>";

output.innerHTML = svgOverlay;

actions.blur = function() {
  container.style.display = 'none';
  output.style.display = 'block';
}

actions.unblur = function() {
  output.style.display = 'none';
  container.style.display = 'block';
}

actions.animStart = function() {
  document.body.classList.add('anim');
}

actions.animStop = function() {
  document.body.classList.remove('anim');
}

document.getElementById('controls').addEventListener('click', function(evt) {
  if (typeof actions[evt.target.id] === 'function') {
    actions[evt.target.id]();
  }
})
