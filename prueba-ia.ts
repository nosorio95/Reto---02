import { IAService } from "./src/services/IAService";

async function main() {

  try {

    const ia =
      new IAService();

    const resultado =
      await ia.clasificar(
        "COTIZACIÓN No. COT-2026-088"
      );

    console.log(
      resultado
    );

  } catch (error) {

    console.error(
      "Error OpenAI:",
      error
    );

  }

}

main();