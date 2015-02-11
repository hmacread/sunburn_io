//= require vendor/domready
//= require vendor/d3
//= require vendor/trianglify

domready(function () {
  var t = new Trianglify({x_gradient: ["#FFCB90", "#F37052", "#FFA590", "#2D7898"], y_gradient: ["#F37052", "#F29E40"]});
  var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);

  document.getElementById("header").setAttribute('style', 'background-image: ' + pattern.dataUrl);
});
