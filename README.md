<h1 align="center">KristhDevCV Backend</h1>

## Tabla de contenidos
- [Tabla de contenidos](#tabla-de-contenidos)
- [1. Tecnologías](#1-tecnologías)
  - [1.1. Express](#11-express)
  - [1.2. Typescript](#12-typescript)
  - [1.5. Enlaces](#15-enlaces)
- [2. Entorno de desarrollo](#2-entorno-de-desarrollo)
  - [2.1. Node.js](#21-nodejs)
  - [2.2. Pnpm (opcional)](#22-pnpm-opcional)
  - [2.3. Enlaces](#23-enlaces)
- [3. Correr en desarrollo](#3-correr-en-desarrollo)
  - [3.1. Clonar repositorio](#31-clonar-repositorio)
  - [3.2. Variables de entorno](#32-variables-de-entorno)
  - [3.3. Instalar dependencias](#33-instalar-dependencias)
  - [3.4. Correr aplicación](#34-correr-aplicación)

Este es un microservicio para generar mi currículum con la información más reciente que tenga en mi [Portfolio](https://kristhdev.vercel.app) 
y evitar editarlo manualmente. Este es llamado desde mi portafolio para descargar el currículum. 

<a name="1-tecnologias"></a>
## 1. Tecnologías

<a name="1.1.-express"></a>
### 1.1. Express
Es un **popular framework de aplicaciones web para Node.js**, que se utiliza para crear aplicaciones web y servicios web
basados en el protocolo HTTP. Express es una **capa delgada sobre Node.js y proporciona una amplia gama de características**
para la creación rápida y fácil de aplicaciones web robustas.

<a name="1.2.-typescript"></a>
### 1.2. Typescript
Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un **superconjunto 
de JavaScript**, que esencialmente añade tipos estáticos y objetos basados en clases. **Extiende la sintaxis de JavaScript**,
por tanto, cualquier código JavaScript existente debería funcionar sin problemas.

<a name="1.5.-enlaces"></a>
### 1.5. Enlaces
 * [Express](https://expressjs.com)  
 * [TypeScript](https://www.typescriptlang.org)  

<a name="2-entorno-de-desarrollo"></a>
## 2. Entorno de desarrollo

Para montar el entorno de desarrollo y correr la aplicación se necesitan los siguientes programas:

<a name="2.1.-nodejs"></a>
### 2.1. Node.js
Es un **entorno en tiempo de ejecución multiplataforma para la capa del servidor** (en el lado del servidor) basado en 
JavaScript. Controlado por eventos, diseñado para crear aplicaciones escalables, permitiéndote establecer y gestionar 
múltiples conexiones al mismo tiempo. Gracias a esta característica, no tienes que preocuparte con el bloqueo de procesos, 
pues no hay bloqueos.

Node.js está **basado en el motor V8 de Google**, uno de los intérpretes de lenguaje de programación que existen. Este 
motor se encarga de compilar el código JavaScript en código de máquina, un código de nivel más bajo que no hace falta 
que sea interpretado por el navegador.

<a name="2.2.-pnpm-opcional"></a>
### 2.2. Pnpm (opcional)
Es un **gestor de paquetes de JavaScript** para aplicaciones web y Node.js. Es una **alternativa a npm y yarn,** dos de los gestores 
de paquetes más populares de la industria.

Pnpm se destaca por su **enfoque en el rendimiento y la eficiencia.** En lugar de descargar cada paquete en el directorio de
node_modules de cada proyecto, pnpm **utiliza un único almacén central para todos los paquetes instalados en un sistema,** lo 
que significa que los paquetes se descargan una sola vez y se comparten entre los diferentes proyectos. Esto **reduce el tamaño 
de los proyectos y acelera el proceso de instalación** de paquetes.

<a name="2.3.-enlaces"></a>
### 2.3. Enlaces
 * [Node.js](https://nodejs.org)
 * [Pnpm](https://pnpm.io/es)

<a name="3-correr-en-desarrollo"></a>
## 3. Correr en desarrollo
A partir de aquí se explicará cómo levantar el servidor en desarrollo:

<a name="3.1.-clonar-repositorio"></a>
### 3.1. Clonar repositorio
Lo primero es clonar el repositorio de git, para ello **abre una terminal** (cmd, powershell, gitbash, etc.) y escribe el 
siguiente comando:

```shell
git https://github.com/KristhDev/KristhDevCV-backend.git
```

<a name="3.2.-variables-de-entorno"></a>
### 3.2. Variables de entorno
En el repositorio está un **archivo de ejemplo de variables de entorno** `.env.example`. Copia ese archivo y renómbralo 
cómo `.env`. Luego **reemplaza los valores por los que da Supabase, OneSignal y Logtail.** Recuerda que para ello ya **debes tener una cuenta** en Supabase y haber **creado un proyecto**, además de haber **creado una cuenta en OneSignal** y haber configurado
la parte de las **notificaciones en Android.**

| Variable             | Descripción                                              |
|----------------------|----------------------------------------------------------|
| APP_ENV              | Es el entorno en el que se está ejecutando la aplicación |
| APP_PORT             | Es el puerto en el que se está ejecutando la aplicación  |
| LOGTAIL_SOURCE_TOKEN | Es el token de Logtail                                   |
| LOGTAIL_SOURCE_URL   | Es la url de la fuente de Logtail                        |
| PORTFOLIO_API_URL    | Es la url de la api de Portfolio                         |

<a name="3.3.-instalar-dependencias"></a>
### 3.3. Instalar dependencias
Una vez clonado y con las variables de entorno, has un ```cd``` a la **raíz del proyecto** y ejecuta el siguiente comando:

```shell
pnpm install
```

<a name="3.4.-correr-aplicacion"></a>
### 3.4. Correr aplicación
Una vez instaladas las dependencias, ejecuta el siguiente comando:

```shell
pnpm dev
```

Y listo, la aplicación ya estará corriendo localmente.
