import { preguntarIA } from "../llm/openai";

export class IAService {

  async clasificar(
    contenido: string
  ): Promise<string> {

    const prompt = `
Eres un analista experto en gestión contractual.

Analiza el texto recibido y responde con este formato:

CLASIFICACIÓN: REGISTRAR | DESCARTADO | REVISION_HUMANA

MOTIVO:
- Explica por qué clasificaste así.

RECOMENDACIÓN:
- Indica qué debería hacer el usuario.

Texto:

${contenido}
`;

    return await preguntarIA(
      prompt
    );

  }

}