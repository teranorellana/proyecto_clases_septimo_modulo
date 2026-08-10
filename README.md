# Colegio San Marcos - Frontend

Este es el proyecto frontend para la gestión de alumnos del **Colegio San Marcos**. La aplicación permite listar, ver detalles, crear y actualizar registros de alumnos mediante una interfaz moderna y reactiva.

Desarrollado utilizando [React](https://react.dev/) y [Vite](https://vite.dev/) como empaquetador y entorno de desarrollo.

---

## 🛠️ Tecnologías y Herramientas

- **Framework principal:** React (v19)
- **Entorno de desarrollo:** Vite (v8)
- **Cliente HTTP:** Axios (para consumir la API de alumnos)
- **Linter:** Oxlint (analizador de código ultrarrápido)

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- Un gestor de paquetes como `npm` (incluido con Node.js) o `yarn`

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para configurar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd colegio_san_marcos_frontend
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto. Puedes tomar como referencia el archivo `.env.example`.
   
   Define las siguientes variables de entorno:
   ```env
   VITE_API_URL=http://localhost:3000/api
   VITE_API_KEY=tu_clave_de_api_aqui
   ```
   *Nota: Reemplaza los valores anteriores con la URL y clave correspondientes a tu backend local o de producción.*

---

## 🚀 Uso y Comandos

Durante el desarrollo, puedes utilizar los siguientes comandos:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local de Vite en `http://localhost:5173`. |
| `npm run build` | Compila y optimiza la aplicación para producción. Los archivos listos se generarán en la carpeta `dist`. |
| `npm run preview` | Permite previsualizar localmente la versión compilada de producción. |
| `npm run lint` | Ejecuta el linter **Oxlint** para buscar y corregir errores de código y estilo rápidamente. |

---

## 📂 Estructura del Directorio `src/`

El código de la aplicación está organizado de la siguiente manera:

* **`api/`**: Contiene la configuración global de Axios ([axiosConfig.js](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/api/axiosConfig.js)), la cual incluye la inyección de las variables de entorno (`VITE_API_URL`, `VITE_API_KEY`).
* **`components/`**: Componentes reutilizables e interactivos de React:
  * [ListaAlumnos.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/ListaAlumnos.jsx): Muestra y gestiona el listado completo de los alumnos.
  * [DetalleAlumno.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/DetalleAlumno.jsx): Muestra la información específica de un alumno seleccionado.
  * [FormularioCrear.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/FormularioCrear.jsx): Formulario para el registro de nuevos estudiantes.
  * Otros componentes de soporte como [TarjetaAlumno.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/TarjetaAlumno.jsx), [CampoTexto.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/CampoTexto.jsx), [Contador.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/Contador.jsx), [Encabezado.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/Encabezado.jsx), [MensajeBienvenida.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/MensajeBienvenida.jsx) e [interruptor.jsx](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/components/interruptor.jsx).
* **`services/`**: Métodos para comunicarse con la API de backend ([alumnosService.js](file:///c:/Users/Prof.Fredy/Downloads/colegio_san_marcos_frontend/src/services/alumnosService.js)).
* **`App.jsx`**: Componente raíz que maneja el estado principal de la aplicación y la selección de alumnos.
* **`main.jsx`**: Punto de entrada de la aplicación React.
