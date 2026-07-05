let zoom = 90;

function alterarZoom(valor) {
  zoom += valor;
  zoom = Math.max(40, Math.min(250, zoom));
  document.getElementById("infografico").style.width = zoom + "%";
}

function resetarZoom() {
  zoom = 90;
  document.getElementById("infografico").style.width = zoom + "%";
}
