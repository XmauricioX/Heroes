const express = require("express");
const app = express();
const path = require("path");

const heroesRouter = require("./routes/heroesRouter")

app.listen(3030,() => console.log("Server up on port 3030"));
// levanta el server en el puerto 3030
app.use(express.static("public"));
// indica la ruta de los archivos estaticos

app.use("/", heroesRouter);
app.use("/heore", heroesRouter)



