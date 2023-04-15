var baslik = document.title;
var baslik2 = "Microsoft Clone";

window.onblur = function () {
  document.title = baslik2;
};
window.onfocus = function () {
  document.title = baslik;
};
