import * as path from "path";

import {
  leerTexto,
  obtenerCarpetas
} from "./src/utils/files";

import {
  RegistroService
} from "./src/services/RegistroService";

import {
  ClasificadorService
} from "./src/services/ClasificadorService";

async function main() {

  const base = "./fixtures";

  const carpetas =
    obtenerCarpetas(base);

  const registro =
    new RegistroService();

  const clasificador =
    new ClasificadorService();

  for (const carpeta of carpetas) {

    let contenido = "";

    const archivos = [
      "correo.json",
      "contrato.txt",
      "cotizacion.txt"
    ];

    for (const archivo of archivos) {

      try {

        contenido += "\n";

        contenido += leerTexto(
          path.join(
            base,
            carpeta,
            archivo
          )
        );

      } catch {}

    }

    try {

      console.log("===============");
      console.log("CASO:", carpeta);

      const resultado =
        await clasificador.clasificar(
          contenido
        );

      console.log(
        `${carpeta} → ${resultado}`
      );

      registro.guardarHistorial({
        id: carpeta,
        resultado
      });

    } catch (error) {

      console.error(
        `${carpeta} ERROR`,
        error
      );

    }

  }

  console.log(
    "\nProceso finalizado."
  );

}

main();