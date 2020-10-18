import "regenerator-runtime/runtime.js";
import initDB from "./config/database";
import app from "./app";
app.listen(app.get("port"), () =>
  console.log(`Servidor Funcionando, puerto: ${app.get("port")}!`)
);

initDB();
module.exports = app;
