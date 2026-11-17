import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";

dotenv.config();

const cohere = new CohereClient({
  token: process.env.CO_API_KEY
});

async function main() {

  try {

    const modelos =
      await cohere.models.list();

    console.log(
      JSON.stringify(
        modelos,
        null,
        2
      )
    );

  } catch (error) {

    console.error(error);

  }

}

main();