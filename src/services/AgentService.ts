import {
  esContratoMarco,
  esCotizacion,
  validarContrato
} from "../tools/contratos";

import { Contrato } from "../types/Contrato";

export class AgentService {
  analizar(
    id: string,
    contenido: string,
    contrato?: Partial<Contrato>
  ) {

    if (esCotizacion(contenido)) {
      return {
        id,
        resultado: "DESCARTADO",
        motivo: "Es una cotización"
      };
    }

    if (esContratoMarco(contenido)) {
      return {
        id,
        resultado: "REVISION_HUMANA",
        motivo: "Contrato marco"
      };
    }

    if (contrato) {
      const errores = validarContrato(contrato);

      if (errores.length > 0) {
        return {
          id,
          resultado: "REVISION_HUMANA",
          errores
        };
      }
    }

    return {
      id,
      resultado: "REGISTRAR"
    };
  }
}