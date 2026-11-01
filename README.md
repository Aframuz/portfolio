# Portafolio — Oscar Muñoz

Hola, soy **Oscar Muñoz**, desarrollador Full Stack y estudiante de Ingeniería de Datos en Santiago de Chile.

Desde 2018 construyo aplicaciones web de principio a fin: arquitectura, lógica de negocio, APIs REST, interfaces en React/TypeScript, testing, despliegue y mantenimiento. Trabajé como desarrollador Full Stack en Chile Pasajes SPA y llevo varios años como freelancer haciendo paneles administrativos, plataformas operativas y herramientas a medida.

Hoy estoy enfocando ese camino hacia los datos: ingesta, transformación y persistencia con Python, SQL y servicios de AWS (Lambda, Glue, S3, CloudWatch), para construir procesos ETL trazables y fáciles de mantener. Antes de programar estudié Bioquímica en la Universidad de Chile, y de ahí viene mi forma de trabajar: método, rigor y gusto por entender cómo funcionan las cosas por dentro.

- **GitHub:** [github.com/aframuz](https://github.com/aframuz)
- **LinkedIn:** [linkedin.com/in/aframuz](https://linkedin.com/in/aframuz)

## Sobre este repositorio

Este es el código de mi portafolio personal: un sitio estático y sobrio, hecho con [Astro](https://astro.build), sin frameworks de UI ni dependencias innecesarias.

El sitio tiene **dos contextos**, *Desarrollo de software* e *Ingeniería de datos*. Un interruptor en la portada cambia entre ellos, y con él cambian el titular, la presentación, las cifras, los proyectos, la trayectoria, el stack y las certificaciones. El navegador recuerda el último contexto elegido.

### Stack

- Astro 6 + TypeScript
- CSS propio, con `normalize.css` como base
- Tipografías Archivo y Source Serif 4 (vía Fontsource)
- Contenido en YAML (`@rollup/plugin-yaml`)

### Estructura

```text
src/
├── data/
│   ├── portfolio.yaml   # todo el contenido del sitio
│   └── portfolio.ts     # tipos y acceso a los datos
├── components/          # secciones de la página (Hero, Projects, Experience…)
├── layouts/Layout.astro
└── pages/index.astro
public/                  # favicon y archivos estáticos
```

El contenido no está escrito en los componentes: todo vive en `src/data/portfolio.yaml`. Para actualizar proyectos, experiencia o certificaciones basta con editar ese archivo.

### Desarrollo local

Requiere Node.js 22.12 o superior y [pnpm](https://pnpm.io).

| Comando        | Acción                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Instala las dependencias                        |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321`      |
| `pnpm build`   | Genera el sitio de producción en `./dist/`      |
| `pnpm preview` | Sirve la versión compilada para revisarla       |
