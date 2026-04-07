# Evaluación de Proyectos — Caso de Uso: Ferretería El Tornillo

> Material educativo para **7mo Informática 2026** — Instituto Leonardo Murialdo  
> Prof. Pedaci, Lourdes · Módulo 2 — Fases de un proyecto

---

## Descripción

Sitio web educativo de una sola página (SPA estática) que recorre de forma completa el proceso de relevamiento y análisis de un proyecto de software real: desde la entrevista inicial con el cliente hasta la definición de requerimientos y OKRs medibles.

El caso de uso está basado en **Roberto Fernández**, dueño de la Ferretería El Tornillo (Villa Bosch, Tres de Febrero), y sirve como referencia concreta para que los alumnos aprendan a:

- Diseñar y aplicar una entrevista estructurada de relevamiento
- Distinguir síntomas de causas reales en el diagnóstico de un problema
- Construir la línea de base del proyecto con datos medibles
- Definir Requerimientos Funcionales (RF) y No Funcionales (RNF) trazables
- Formular OKRs con Key Results verificables
- Armar perfiles de usuario completos con criterios de accesibilidad

El objetivo pedagógico central es demostrar que **la investigación con el usuario precede y determina las decisiones tecnológicas**: ningún requerimiento, stack ni OKR existe antes de la entrevista.

### Secciones del caso

| # | Sección | Contenido |
|---|---------|-----------|
| 01 | **El usuario real** | Perfil del cliente, por qué se elige un usuario concreto |
| 02 | **Formulario de entrevista** | 28 preguntas estructuradas en 8 bloques metodológicos (Pirámide, Embudo, Likert, Diamante, Sondeo) |
| 03 | **Análisis de resultados** | Síntomas → causas → soluciones técnicas. Línea de base medible |
| 04 | **Requerimientos** | RF, RNF, ISW y Limitaciones trazados a respuestas concretas de la entrevista |
| 05 | **OKRs** | 6 objetivos con Key Results cuantificables derivados de la línea de base |
| 06 | **Perfiles de usuario** | Fichas de Roberto (dueño) y Juan (empleado); implicancias para el diseño en Figma |

---

## Estructura de archivos

```
caso-roberto/
├── index.html              ← Documento principal (HTML semántico)
├── README.md               ← Este archivo
└── assets/
    ├── css/
    │   └── style.css       ← Estilos completos (variables, layout, componentes, responsive)
    └── js/
        └── script.js       ← Interactividad (acordeones, tabs, progreso del formulario, TOC, nav)
```

---

## Tecnologías usadas

| Tecnología | Uso |
|------------|-----|
| **HTML5 semántico** | Estructura del documento |
| **CSS3 con custom properties** | Sistema de diseño basado en variables, layout con Grid y Flexbox |
| **JavaScript vanilla (ES6+)** | Interactividad sin dependencias externas |
| [**DM Sans**](https://fonts.google.com/specimen/DM+Sans) (Google Fonts) | Tipografía principal |
| **Intersection Observer API** | Navegación activa y TOC dinámico |

> No se usa ningún framework ni librería externa. El proyecto es 100% estático y no requiere build step.

---

## Funcionalidades interactivas

- **Formulario de entrevista**: 28 preguntas agrupadas en 8 bloques colapsables con barra de progreso en tiempo real
- **Tabs de requerimientos**: Alternancia entre RF, RNF, ISW y Limitaciones sin recarga
- **Navegación activa**: El link del nav y la píldora del TOC se resaltan según la sección visible
- **Menú mobile**: Hamburguesa con overlay fullscreen para pantallas pequeñas
- **Animaciones de entrada**: Fade + translate en el hero con delays escalonados

---

## Notas orientativas didácticas

- Cada requerimiento incluye su **trazabilidad** hacia una respuesta concreta de la entrevista.
- Los elementos marcados con `nuevo` señalan aprendizajes que emergen de los bloques B, C y F de la entrevista (tecnología, usuarios del sistema y accesibilidad).
- El caso puede usarse como plantilla para que los alumnos reemplacen el usuario ficticio por su propio cliente real.

---

## Créditos

- **Autor**: Prof. Pedaci, Lourdes — [LinkedIn](https://www.linkedin.com/in/lourdes-pedaci/)
- **Institución**: Instituto Leonardo Murialdo · 7mo Informática 2026
- **Módulo**: 02 — Fases de un Proyecto

---

> _"Definición incorrecta → solución incorrecta."_

---

*Material de uso instruccional. Los casos de uso son ficticios y fueron construidos como ejemplos pedagógicos para modelar la metodología de la asignatura.*
