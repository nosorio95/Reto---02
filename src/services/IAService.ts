import { preguntarIA } from "../llm/openai";

export class IAService {

  async clasificar(
    contenido: string
  ): Promise<string> {

    try {

      const prompt = `
Analiza el siguiente contenido.

Responde únicamente una de estas opciones:

REGISTRAR
DESCARTADO
REVISION_HUMANA

Reglas:

- Si es una cotización => DESCARTADO
- Si es un contrato marco => REVISION_HUMANA
- Si es un contrato firmado => REGISTRAR

Contenido:

${contenido}
`;

      const respuesta =
        await Promise.race([
          preguntarIA(prompt),
          new Promise<string>((_, reject) =>
            setTimeout(
              () => reject(new Error("timeout")),
              5000
            )
          )
        ]);

      return respuesta.trim();

    } catch {

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

}