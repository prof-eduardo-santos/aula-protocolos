function requisicao() {

  fetch("https://script.google.com/macros/s/AKfycbxKsj8vCoQObR3TWnR4gewk_OQHeHgnLO8ywJWdvwN8bB5rGOkc-lTONyp0nGO6mZPHzQ/exec")
    .then(res => res.text())
    .then(data => {
      document.getElementById("resposta").innerText = data;
    })
    .catch(error => {
      document.getElementById("resposta").innerText = "Erro na requisição";
      console.error(error);
    });

}