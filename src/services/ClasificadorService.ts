export class ClasificadorService {

  async clasificar(
    contenido: string
  ): Promise<string> {

    const texto =
      contenido.toLowerCase();

    if (
      texto.includes("cotización") ||
      texto.includes("cotizacion")
    ) {

      return `
CLASIFICACIÓN: DESCARTADO

MOTIVO:
- El documento corresponde a una cotización.
- No existe evidencia de contrato firmado.

RECOMENDACIÓN:
- No registrar en el maestro de contratos.
`;

    }

    if (
      texto.includes("contrato marco")
    ) {

      return `
CLASIFICACIÓN: REVISION_HUMANA

MOTIVO:
- Se identifica un contrato marco.
- No existe valor contractual definitivo.

RECOMENDACIÓN:
- Validar manualmente antes del registro.
`;

    }

    return `
CLASIFICACIÓN: REGISTRAR

MOTIVO:
- Se identifica información contractual válida.
- Existe información suficiente para continuar el proceso.

RECOMENDACIÓN:
- Registrar el contrato en el maestro.
`;

  }

}