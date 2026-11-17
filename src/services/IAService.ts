import { preguntarIA } from "../llm/openai";

export class IAService {

  async clasificar(
    contenido: string
  ): Promise<string> {

    const prompt = `
Eres un analista senior de contratos.

Analiza el texto recibido y responde EXACTAMENTE en este formato:

CLASIFICACIÓN: REGISTRAR | DESCARTADO | REVISION_HUMANA

MOTIVO:
- Explica por qué clasificaste el documento.
- Identifica si es contrato firmado, cotización o contrato marco.

RECOMENDACIÓN:
- Indica la acción que debe realizarse.

Texto:

${contenido}
`;

    const respuesta =
      await preguntarIA(
        prompt
      );

    return respuesta;

  }

}