# Desafío React / MongoDB - Backend

## 📌 Introducción

Este backend provee una API RESTful para gestionar productos y precios especiales en MongoDB, cumpliendo con los requerimientos de la prueba técnica. Desarrollado con Node.js y Express.

## 🚀 Pasos para ejecutar localmente

1. Clonar el repositorio.
   ```bash
   git clone https://github.com/jhosbel/prueba-tecnica-react-node-backend.git
   cd backend
   ```
2. Instalar dependencias.
   ```
   npm install
   ```
3. Crear archivo .env basado en .env.example.
   ```bash
   MONGODB_URI= URL de tu mongodb
   PORT=5000
   ```
4. Ejecutar el servidor.
   ```bash
   npm run dev
   ```

## 🛠️ Justificación Técnica

- **Node.js** Entorno eficiente para I/O intensivo.
- **Express** Framework minimalista para APIs REST.
- **MongoDB con Mongoose** Modelado seguro de datos en MongoDB.
- **Dotenv** para gestión de variables de entorno.
- **CORS** Gestión segura de solicitudes cruzadas.

## 📡 Endpoints

- `GET /api/productos` → Lista todos los productos.
- `GET /api/precios-especiales/usuarios` → Obten todos los usuarios con precios especiales.
- `GET /api/precios-especiales/:userId` → Obtener precios especiales de un usuario.
- `POST /api/precios-especiales` → Crea nuevo precio especial.
- `PUT /api/precios-especiales/:id` → Actualiza precio especial existente.
- `DELETE /api/precios-especiales/:id` → Elimina precio especial.

### Ejemplo Obtener precio especial de un usuario (GET /precios-especiales?userId=VIP_01):

```bash
    [
        {
            "specialPriceId": "665f1a2b3c45e8a2d7c8f3a3",
            "producto": "Camiseta Deportiva",
            "precioOriginal": 350,
            "precioEspecial": 300,
            "asignadoEn": "2025-02-18T23:09:39.444Z"
        }
    ]
```

### Ejemplo crear un precio especial (POST /precios-especiales):

```bash
    {
        "userId": "VIP_01",
        "productId": "6750efb4fce1f2f80959a98d",
        "specialPrice": 950
    }
```

## 📂 Estructura del proyecto

    /backend
    ├── src
    │   ├── controllers/    # Lógica de endpoints
    │   ├── models/         # Esquemas MongoDB
    │   ├── routes/         # Definición de rutas
    │   ├── config/         # Configuración de la base de datos
    ├── .server.js          # Punto de entrada
    ├── .env.example        # Plantilla variables de entorno
    └── .gitignore          # Archivos y carpetas ignoradas por Git

## 🔍 Mejoras Futuras

- Implementar autenticación JWT

- Añadir paginación a endpoints de listados

- Crear sistema de logs detallados

- Agregar rate limiting

## 🤝 Contribución

1. Haz fork del proyecto

2. Crea tu rama: git checkout -b feat/nueva-funcionalidad

3. Commit cambios: git commit -m 'Add some feature'

4. Push a la rama: git push origin feat/nueva-funcionalidad

5. Abre un Pull Request