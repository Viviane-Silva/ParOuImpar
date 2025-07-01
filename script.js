function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

function verificarParOuImpar(valor) {
  return valor % 2 === 0 ? "Par" : "Ímpar";
}

function jogar() {
  const input = document.getElementById("numeroUsuario");
  const numeroUsuario = parseInt(input.value);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
    alert("Por favor, digite um número entre 1 e 10.");
    return;
  }

  const numeroComputador = gerarNumeroAleatorio();
  const soma = numeroUsuario + numeroComputador;
  const resultado = verificarParOuImpar(soma);

  document.getElementById(
    "resultado"
  ).innerText = `Você escolheu ${numeroUsuario}, o computador escolheu ${numeroComputador}.
        Soma: ${soma} → Resultado: ${resultado}`;
}
