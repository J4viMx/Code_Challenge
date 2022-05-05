﻿# Code_Challenge

Visual Partner-Ship te ha asignado el siguiente proyecto:

# Cursos de Visual Thinking API

Aquí encuentras la db en formato JSON de los estudiantes de Visual Partner-Ship: https://gist.github.com/carlogilmar/1f5164637fb77aecef3b9e6b9e2a9b63

Requerimientos:
1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

## Diagramas de flujo
```mermaid
graph TD;
  p2[Run server];
  p3[Access to localhost.com/3000];
  p4[Get Todos los estudiantes];
  p5[Get Email estudiantes con certificacion];
  p6[Get Estudiantes con creditos mayor a 500];
  p7(End);

  p2-->p3;
  p3-->p4;
  p3-->p5;
  p3-->p6;
  p4-->p7;
  p5-->p7;
  p6-->p7;
```
