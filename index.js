function verificar() {
  let date = new Date();
  let ano = date.getUTCFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("Verifique se os dados estão corretos");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";

    // Criação de foto dinamica
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        // Criança
        img.setAttribute("src", "./imagens/meninobebe.png");
      } else if (idade <= 21) {
        // Jovem
        img.setAttribute("src", "./imagens/homemjovem.png");
      } else if (idade <= 50) {
        // Adulto
        img.setAttribute("src", "./imagens/homemadulto.png");
      } else {
        // Idoso
        img.setAttribute("src", "./imagens/homemidoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "./imagens/meniabebe.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./imagens/mulherjovem.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./imagens/mulheradulta.png");
      } else {
        // Idoso
        img.setAttribute("src", "./imagens/mulheridosa.png");
      }
    }
    res.innerText = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
