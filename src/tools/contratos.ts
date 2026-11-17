import { Contrato } from "../types/Contrato";

export function esCotizacion(texto: string): boolean {

  const contenido =
    texto.toLowerCase();

  return (
    contenido.includes("cotización") ||
    contenido.includes("cotizacion")
  );

}

export function esContratoMarco(
  texto: string
): boolean {

  const contenido =
    texto.toLowerCase();

  return (
    contenido.includes("contrato marco")
  );

}

export function validarContrato(
  contrato: Partial<Contrato>
): string[] {

  const errores: string[] = [];

  if (!contrato.cliente) {
    errores.push("cliente");
  }

  if (!contrato.valor) {
    errores.push("valor");
  }

  if (!contrato.fecha_inicio) {
    errores.push("fecha_inicio");
  }

  if (!contrato.fecha_fin) {
    errores.push("fecha_fin");
  }

  return errores;
}