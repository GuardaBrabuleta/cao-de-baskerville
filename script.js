
const cena = document.querySelector('.cena');
const dialogo = document.querySelector('.dialogo');
const contador = document.querySelector('.contador');

const pistas = [
  { x: 205, y: 245, content: "Você encontrou uma pegada!" },
  { x: 400, y: 245, content: "Os rastros te levam até aqui." },
  { x: 150, y: 350, content: "Um anel com o símbolo dos Baskerville." },
  { x: 700, y: 300, content: "Pedaço de tecido." },
  { x: 75, y: 245, content: "Pedregulho estranhamente danificado." },
  { x: 1000, y: 300, content: "Há um cheiro forte de sangue." },
  { x: 1218, y: 418, content: "Pegadas de um salto alto. Provavelmente alguém fugiu." },
  { x: 1094, y: 175, content: "Trancada por dentro." },
  { x: 834, y: 124, content: "Você encontrou o cachorro. CONTINUA..." }
];

let pistaAtual = 0;

cena.addEventListener('click', (event) => {
  let pistaEncontrada = false;
  const x = event.clientX;
  const y = event.clientY;

  for (let i = pistaAtual; i < pistas.length; i++) {
    const { x: pistaX, y: pistaY, content } = pistas[i];
    console.log("Pista n encontrada")
    if (x > pistaX - 50 && x < pistaX + 50 && y > pistaY - 50 && y < pistaY + 50) {
      console.log("Pista encontrada")
      dialogo.textContent = content;
      pistaAtual++;
      const proximaPista = document.querySelector(`.pista${pistaAtual + 1}`);
      if (proximaPista) {
        console.log(proximaPista)
        proximaPista.style.display = 'block';
      }
      contador.textContent = `${i + 1} / 9`;
      pistaEncontrada = true;
      break;
    }
  }

  // Se nenhuma pista foi encontrada, mantém a mensagem padrão
  if (!pistaEncontrada) {
    dialogo.textContent = "Nada aqui!";
  }
});

// Modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

modal.style.display = "block";

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}