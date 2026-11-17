import * as path from "path";

import { AgentService } from "./src/services/AgentService";
import { RegistroService } from "./src/services/RegistroService";

import {
  leerTexto,
  obtenerCarpetas
} from "./src/utils/files";

const agent = new AgentService();
const registro = new RegistroService();

const base = "./fixtures";

const carpetas = obtenerCarpetas(base);

for (const carpeta of carpetas) {

  const rutaCorreo = path.join(
    base,
    carpeta,
    "correo.json"
  );

  let contenido = leerTexto(
    rutaCorreo
  );

  const rutaContrato = path.join(
    base,
    carpeta,
    "contrato.txt"
  );

  const rutaCotizacion = path.join(
    base,
    carpeta,
    "cotizacion.txt"
  );

  try {

    contenido +=
      "\n" +
      leerTexto(rutaContrato);

  } catch {}

  try {

    contenido +=
      "\n" +
      leerTexto(rutaCotizacion);

  } catch {}

  console.log("===============");
  console.log("CASO:", carpeta);

  const resultado = agent.analizar(
    carpeta,
    contenido
  );

  console.log(resultado);

  if (
    resultado.resultado ===
    "REGISTRAR"
  ) {

    registro.guardarContrato(
      `${carpeta},Contrato de prueba`
    );

  }

  registro.guardarHistorial(
    resultado
  );

}

console.log(
  "\nProceso finalizado correctamente."
);