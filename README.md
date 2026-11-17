# Reto-02

## Descripción

Agente para procesamiento y registro de contratos.

## Funcionalidades

- Lectura de correos desde fixtures
- Clasificación de solicitudes
- Registro de historial
- Generación de archivo CSV
- Arquitectura modular

## Estructura

```text
src/
├── knowledge/
├── llm/
├── services/
├── tools/
├── types/
└── utils/
```

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run demo
```

## Salidas

```text
out/sharepoint/historial.jsonl
out/sharepoint/maestro-contratos.csv
```