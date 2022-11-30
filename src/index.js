const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");

// dotenv

require("dotenv").config();

// passport

require("./config/Session.js")

// DataBase

const { mongoose } = require("./database")

const server = express();

// Sessions Cookies

server.use(session({

    secret:"123456789",
    resave: true,
    saveUninitialized:true

}));

// Settings

server.set("port", process.env.PORT || 3000); // LOCAL PORT

// Middlewares

server.use(morgan("dev"));
server.use(express.json()); // JSON FORMAT
server.use(passport.initialize());
server.use(passport.session());
server.use(cors());

// Routes

server.use("/api",require("./routes/task.routes.js"));

// Session

// server.get("/session", function(req, res){

//     req.session.usuario = "Juan perez";
//     req.session.rol = "Admin";
//     req.session.visitas = req.session.visitas ? ++req.session.visitas : 1
//     console.log(req.session)
//     res.send(`El usuario <strong>${req.session.usuario}<strong/>
//                 con rol <strong>${req.session.rol}<strong/> 
//                 ha visitado esta pagina <strong>${req.session.visitas}<strong/>
//     `)
// })

// Static files, React init

server.use(express.static("../instaya"));

// Server init

server.listen(server.get("port"), function(){

    console.log("Server on Port", server.get("port"));

});