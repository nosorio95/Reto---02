import fs from "fs";
import path from "path";

export function leerTexto(ruta: string): string {
  return fs.readFileSync(ruta, "utf-8");
}

export function existeArchivo(ruta: string): boolean {
  return fs.existsSync(ruta);
}

export function obtenerCarpetas(ruta: string): string[] {
  return fs
    .readdirSync(ruta)
    .filter((nombre) =>
      fs.statSync(path.join(ruta, nombre)).isDirectory()
    );
}