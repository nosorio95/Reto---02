import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";

dotenv.config();

const cohere = new CohereClient({
  token: process.env.CO_API_KEY
});

export async function preguntarIA(
  prompt: string
): Promise<string> {

  const response =
    await cohere.chat({
      model: "command-r-plus",
      message: prompt
    });

  return response.text || "Sin respuesta";
}