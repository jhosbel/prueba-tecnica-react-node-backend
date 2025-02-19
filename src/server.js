require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar Base de Datos
connectDB();

// Importar Rutas
app.use("/api/productos", require("./routes/product.routes"));
app.use("/api/precios-especiales", require("./routes/specialPrice.routes"));

// Levantar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
