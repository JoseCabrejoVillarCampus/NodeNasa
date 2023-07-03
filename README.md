# Consumo de API de la NASA con Node.js

Este proyecto es una aplicación de Node.js que permite consumir la API de la NASA para obtener datos sobre asteroides. Proporciona información sobre los asteroides cercanos a la Tierra en un rango de fechas específico.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (versión 12 o superior)
- NPM (administrador de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.

2. Abre una terminal en la ubicación del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```
   Copy code
   npm install
   ```

## Uso

1. Obtén una clave de API de la NASA. Puedes obtener una clave gratuita registrándote en el [sitio web de la API de la NASA](https://api.nasa.gov/).

2. Abre el archivo `app.js` en un editor de texto.

3. En la sección `Configuración`, encuentra la constante `apiKey` y reemplázala con tu clave de API de la NASA.

4. Opcional: Si deseas filtrar los asteroides por tamaño o clasificarlos según su riesgo de impacto, puedes modificar las funciones `filterAsteroidsBySize` y `sortAsteroidsByRisk` en el archivo `nasa.js`.

5. Guarda los cambios en `app.js`.

6. En la terminal, ejecuta el siguiente comando para iniciar el servidor:

   ```
   sqlCopy code
   npm start
   ```

7. El servidor estará disponible en `http://localhost:3000`.

8. Abre tu navegador web y visita `http://localhost:3000/asteroids` para ver los datos de los asteroides obtenidos de la API de la NASA.

## Contribuciones

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes enviar tus pull requests o abrir issues para discutir nuevas funcionalidades, mejoras o correcciones de errores.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://chat.openai.com/c/LICENSE).