let nomesCurtidas = [];

const nomeInput = document.getElementById("nome");
const curtirBtn = document.getElementById("curtir");
const curtidasTexto = document.getElementById("curtidasTexto");
const limparBtn = document.getElementById("limpar");

function carregarDados() {
  const dadosSalvos = localStorage.getItem("curtidas");
  if (dadosSalvos) {
    nomesCurtidas = JSON.parse(dadosSalvos);
    atualizarTextoCurtidas();
  }
}

function salvarDados() {
  localStorage.setItem("curtidas", JSON.stringify(nomesCurtidas));
}

function atualizarTextoCurtidas() {
  const quantidade = nomesCurtidas.length;

  if (quantidade === 0) {
    curtidasTexto.textContent = "Ninguém curtiu";
  } else if (quantidade === 1) {
    curtidasTexto.textContent = `${nomesCurtidas[0]} curtiu`;
  } else if (quantidade === 2) {
    curtidasTexto.textContent = `${nomesCurtidas[0]} e ${nomesCurtidas[1]} curtiram`;
  } else {
    curtidasTexto.textContent = `${nomesCurtidas[0]}, ${
      nomesCurtidas[1]
    } e mais ${quantidade - 2} pessoas curtiram`;
  }
}

curtirBtn.addEventListener("click", function () {
  const nome = nomeInput.value.trim();

  if (nome) {
    const nomeExiste = nomesCurtidas.some(
      (nomeExistente) => nomeExistente.toLowerCase() === nome.toLowerCase()
    );

    if (!nomeExiste) {
      nomesCurtidas.push(nome);
      atualizarTextoCurtidas();
      salvarDados();
    } else {
      alert("Este nome já curtiu!");
    }

    nomeInput.value = "";
  } else {
    alert("Por favor, digite um nome!");
  }
});

limparBtn.addEventListener("click", function () {
  if (confirm("Tem certeza que deseja limpar todas as curtidas?")) {
    nomesCurtidas = [];
    localStorage.removeItem("curtidas");
    atualizarTextoCurtidas();
  }
});

nomeInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    curtirBtn.click();
  }
});

carregarDados()
