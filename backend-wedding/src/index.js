// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// // const router = require("./routes/general.routes");
// const router = require("./routes/confirmation.routes");

// const app = express();

// // Settings
// app.set("port", process.env.PORT || 5000);

// // Middlewares
// app.use(cors());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.use(router);

// // handling errors
// app.use((err, req, res, next) => {
//   return res.status(500).json({
//     status: "error",
//     message: err.message,
//   });
// });

// app.listen(app.get("port"));
// console.log("Server on port", app.get("port"));


const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/confirmation.routes");

const app = express();

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.set("port", PORT);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(router);

// Manejo de Errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
