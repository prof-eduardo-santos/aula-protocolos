function requisicao() {

  fetch("https://script.google.com/macros/s/AKfycbz0RemQomNaW0aCebEGPLU9lNTD5bwgICaVX2YOVGN0b-WF2DLUk28p-OFMg06qmDYysQ/exec")
    .then(res => res.text())
    .then(data => {
      document.getElementById("resposta").innerText = data;
    })
    .catch(error => {
      document.getElementById("resposta").innerText = "Erro na requisição";
      console.error(error);
    });

}