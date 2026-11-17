import { preguntarIA } from "../llm/openai";

export class IAService {

  async clasificar(
    contenido: string
  ): Promise<string> {

    const prompt = `
Eres un analista senior de contratos.

Analiza el contenido recibido y responde EXACTAMENTE con este formato:

CLASIFICACIÓN: REGISTRAR | DESCARTADO | REVISION_HUMANA

MOTIVO:
- Explica por qué clasificaste el documento.
- Identifica si es contrato firmado, cotización, propuesta o contrato marco.
- Indica si existe valor definido y vigencia.

RECOMENDACIÓN:
- Indica la acción que debe realizarse.

Ejemplos:

Si es una cotización:

CLASIFICACIÓN: DESCARTADO

MOTIVO:
- El documento corresponde a una cotización comercial.
- No existe evidencia de contrato firmado.

RECOMENDACIÓN:
- No registrar en el maestro de contratos.


Si es un contrato marco:

CLASIFICACIÓN: REVISION_HUMANA

MOTIVO:
- Se identifica un contrato marco.
- No se observan órdenes de servicio específicas.

RECOMENDACIÓN:
- Validar manualmente antes del registro.


Si es un contrato válido:

CLASIFICACIÓN: REGISTRAR

MOTIVO:
- Se identifica un contrato firmado.
- Existe valor contractual definido.
- Existe vigencia definida.

RECOMENDACIÓN:
- Registrar el contrato en el maestro.

Contenido a analizar:

${contenido}
`;

    const respuesta =
      await preguntarIA(prompt);

    return respuesta;

  }

}