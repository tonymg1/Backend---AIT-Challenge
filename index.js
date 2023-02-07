const {conection} = require("./database/connection");
const dotenv = require("dotenv")
const cors = require("cors")
const express = require("express")
const gifRoutes = require("./src/routes/gif.routers")

conection();

const app = express();

app.use(cors())

dotenv.config()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//cargar las rutas
app.use("/api/gif", gifRoutes)

port = 4000
//Servidor a la escucha
app.listen(port, ()=>{
    console.log("Servidor escuchando en el puerto " + port)
})