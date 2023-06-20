const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//  const server = require("./server.js");
// const multer = require("multer");
// const bodyparser = require("body-parser")
// const upload = multer();
const session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(session({ secret: "Behan Secret" }));

app.use(bodyParser.json())

// const specs = swaggerJsDoc(server);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

let Tasks = [
    {
        id : 2,
        titel: "ueue",
        Erstellungsdatum: "13.06.2023",
        Erfüllungsdatum: "13.06.2023"
    },
    {
        id: 4,
        titel: "hoi",
        Erstellungsdatum: "13.06.2023",
        Erfüllungsdatum: "13.06.2023"
    },
    {
        id: 6,
        titel: "ume",
        Erstellungsdatum: "13.06.2023",
        Erfüllungsdatum: "13.06.2023"
    }
];


mymail = "kusibehan@icloud.com"; //meine mail für auth
mypwd = "m295";

app.post("/login", (req, res) => {
    loginmail = req.query.email;
    loginpwd = req.query.password;

    if ((loginmail = mymail) && (loginpwd = mypwd)) {
        req.session.authenticated = true;
        res.send("54");
    } else {
        res.sendStatus(401);
    }
});

app.get("/verify", (req, res) => {
    if (req.session.authenticated == true) {
        res.send(mymail);
    } else {
        res.status(401).send("nicht authentifiziert");
    }
});

app.delete("/logout", (req, res) => {
    req.session.authenticated = false;
    res.status(204).send("done");
});

app.get("/tasks", (req, res) => {
    if (req.session.authenticated == true) {
      res.status(200).send(Tasks);
    } else {
      res.status(401).send("no auth");
    }
  });

  app.post("/tasks", (req, res) => {
    let Newtask = req.body;
    if (Newtask !== {}) {
      Tasks.push(Newtask);
      res.status(200).json(Newtask);
    } else {
      res.status(422).send("Leeres Objekt");
    }
  });

  app.get("/tasks/:ID", (req, res) => {
    if (req.session.authenticated == true) {
      let taskobject = {};
      const id = req.params.ID;
      taskobject = FindById(Tasks, id);
      if (!(typeof taskobject === "undefined")) {
        res.status(200).json(taskobject);
      } else {
        res.status(404).send("nicht gefunden");
      }
    } else {
      res.status(401).send("no auth");
    }
  });

  app.put("/tasks/:ID", (req, res) => {
    const id = req.params.ID;
    let taskobject = req.body;
    if (IsNullChecker(NewBook) == true) {
      let index = Tasks.indexOf(FindById(Books, id));
      Tasks[index] = { ...Tasks[index], ...taskobject };
      res.status(200).json(taskobject);
    } else {
      res.status(422).send("Property leer");
    }
  });

  function FindById(data, id) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        return data[i];
      }
    }
  }
  
  function IsNullChecker(report) {
    return !Object.values(report).every((o) => o === "");
  }

  app.listen(8080, () => {
    console.log("Server is running on port weerew");
  });

