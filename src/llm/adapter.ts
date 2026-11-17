export interface LLMAdapter {

  generar(
    prompt: string
  ): Promise<string>;

}