# Solución

## Arquitectura

El sistema fue dividido en capas:

### Types

Contiene los modelos de datos.

### Tools

Implementa reglas de negocio.

### Services

Orquesta el procesamiento de contratos.

### Utils

Funciones utilitarias.

### Knowledge

Reglas documentadas para clasificación.

## Flujo

1. Leer fixture.
2. Analizar contenido.
3. Clasificar.
4. Registrar historial.
5. Registrar contrato.

## Archivos generados

- historial.jsonl
- maestro-contratos.csv

## Mejoras futuras

- Extracción automática de contratos.
- Integración completa con OpenAI.
- Frontend web.
- Gestión de pólizas.