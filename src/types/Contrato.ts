export interface Contrato {
  id_contrato: string;
  cliente: string;
  nit_cliente: string;
  pais: string;

  objeto: string;

  valor: number;
  moneda: string;

  fecha_inicio: string;
  fecha_fin: string;

  requiere_poliza: boolean;
  tipo_poliza: string;
  estado_poliza: string;

  comercial: string;

  ruta_sharepoint: string;

  fecha_registro: string;

  fuente: string;
}