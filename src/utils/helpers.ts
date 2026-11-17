export function limpiarTexto(
  valor: string
): string {

  return valor.trim();

}

export function normalizarTexto(
  valor: string
): string {

  return valor
    .toLowerCase()
    .trim();

}