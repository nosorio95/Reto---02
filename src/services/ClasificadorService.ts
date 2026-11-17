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
      return "DESCARTADO";
    }

    if (
      texto.includes("contrato marco")
    ) {
      return "REVISION_HUMANA";
    }

    return "REGISTRAR";

  }

}