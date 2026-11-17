import fs from "fs";

export function agregarFilaCsv(
  ruta: string,
  fila: string
): void {

  fs.appendFileSync(
    ruta,
    fila + "\n"
  );

}