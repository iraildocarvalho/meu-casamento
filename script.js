const form = document.getElementById("rsvpForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);

  fetch("COLE_AQUI_SUA_URL_DO_GOOGLE_SCRIPT", {
    method: "POST",
    body: data
  })
    .then(() => {
      mensagem.innerText = "Presença confirmada com sucesso ❤️";
      form.reset();
    })
    .catch(() => {
      mensagem.innerText = "Erro ao enviar. Tente novamente.";
    });
});
