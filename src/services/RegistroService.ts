import fs from "fs";

export class RegistroService {

  guardarHistorial(data: unknown): void {

    const linea =
      JSON.stringify(data) + "\n";

    fs.appendFileSync(
      "./out/sharepoint/historial.jsonl",
      linea
    );
  }

  guardarContrato(
    fila: string
  ): void {

    fs.appendFileSync(
      "./out/sharepoint/maestro-contratos.csv",
      fila + "\n"
    );
  }

}