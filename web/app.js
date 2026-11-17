const chat =
  document.getElementById("chat");

const mensaje =
  document.getElementById("mensaje");

const enviar =
  document.getElementById("enviar");

function agregarMensaje(
  clase,
  texto
) {

  const div =
    document.createElement("div");

  div.className = clase;

  div.textContent =
    texto;

  chat.appendChild(div);

  chat.scrollTop =
    chat.scrollHeight;

}

async function enviarMensaje() {

  const texto =
    mensaje.value.trim();

  if (!texto) {
    return;
  }

  agregarMensaje(
    "user",
    `Usuario: ${texto}`
  );

  mensaje.value = "";

  try {

    const response =
      await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            mensaje: texto
          })
        }
      );

    const data =
      await response.json();

    const respuesta =
      data?.respuesta ||
      data?.error ||
      "Sin respuesta del agente";

    agregarMensaje(
      "bot",
      `Agente: ${respuesta}`
    );

  } catch (error) {

    agregarMensaje(
      "bot",
      "Error al consultar el agente"
    );

  }

}

enviar.addEventListener(
  "click",
  enviarMensaje
);

mensaje.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {
      enviarMensaje();
    }

  }
);