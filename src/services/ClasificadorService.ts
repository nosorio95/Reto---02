import { IAService } from "./IAService";

export class ClasificadorService {

  private ia =
    new IAService();

  async clasificar(
    contenido: string
  ): Promise<string> {

    return await this.ia.clasificar(
      contenido
    );

  }

}