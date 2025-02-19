# Desafío React / MongoDB - Backend

## 📌 Introducción
Este backend en Node.js y Express permite interactuar con MongoDB para obtener productos y gestionar precios especiales.

## 🚀 Pasos para ejecutar localmente
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Crear un archivo `.env` con la variable `MONGO_URI`
4. Ejecutar el servidor: `npm run dev`

## 📌 Justificación Técnica
- **Node.js y Express** para rapidez y escalabilidad.
- **MongoDB con Mongoose** para modelado flexible.
- **Dotenv** para gestión de variables de entorno.

## 📌 Endpoints
- `GET /api/products` → Obtener productos.
- `GET /api/special-prices/:userId` → Obtener precios especiales de un usuario.
- `POST /api/special-prices` → Crear un precio especial.
- `PUT /api/special-prices/:id` → Actualizar precio especial.