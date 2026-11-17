import express from "express";
import cors from "cors";

import { ClasificadorService } from "./services/ClasificadorService";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("web"));

app.get("/api/health", (_, res) => {
  res.json({
    ok: true
  });
});

app.post("/api/chat", async (req, res) => {

  try {

    const { mensaje } = req.body;

    const clasificador =
      new ClasificadorService();

    const respuesta =
      await clasificador.clasificar(
        mensaje
      );

    res.json({
      respuesta:
        respuesta || "Sin respuesta"
    });

  } catch (error) {

    console.error(
      "ERROR API CHAT:",
      error
    );

    res.status(500).json({
      respuesta:
        String(error)
    });

  }

});

const PORT =
  Number(process.env.PORT) || 3000;

app.listen(PORT, () => {

  console.log(
    `Servidor iniciado en puerto ${PORT}`
  );

});