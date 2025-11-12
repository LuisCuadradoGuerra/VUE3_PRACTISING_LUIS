# VUE3_Vite_TS_PRACTISING

Repositorio para pruebas con el framework VUE 3, usando Vite para los test del proyecto y TS como lenguaje de programación principal.

# Requerimientos

Procedimiento completo aquí [Creating Vue Application](https://vuejs.org/guide/quick-start)

Necesitas tener la última versión de node.js. Aquí [Node.js](https://nodejs.org/es) puedes instalarla. Después abre una terminal en la raíz del proyecto y escribe:

```bash
node --version
```

Y como resultado tiene que salir por consola la versión de Node.js que hayas instalado:

![alt text](image-1.png)

Listo. Sólo queda descargar Visual Studio Code, añadir la extensión oficial de VUE y podemos comenzar.

# Comandos instalación e inicialización VUE

En la terminal abierta en la raíz de tu proyecto, escribe:

```bash
npm create vue@latest
```

Tras unos segundos te pedirá el nombre de tu proyecto, el nombre de tu carpeta de proyecto y unas opciones de configuración. Elije todas (Importante añadir TS, VUE ROUTER, PINIA, VITEST, EsLint y Prettier) menos End-to-End Testing Solution.

Después corre en orden estos comandos:

```bash
cd nombre_carpeta_proyecto
npm install
npm run format
npm run dev
```

Y ya tienes el entorno listo y configurado.
