/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - id
 *         - titel
 *         - Erstellungsdatum
 *         - Erfüllungsdatum
 *       properties:
 *         id:
 *           type: number
 *           description: Id der Task
 *         titel:
 *           type: string
 *           description: Titel der Task
 *         Erstellungsdatum:
 *           type: string
 *           format: date
 *           description: Erstellungsdatum der Task
 *         Erfüllungsdatum:
 *           type: string
 *           format: date
 *           description: Wenn die Task erledigt wurde
 *       example:
 *         id: 12
 *         titel: Dietike
 *         Erstellungsdatum: 2020-03-10T04:05:06.157Z
 *         Erfüllungsdatum: 2020-03-10T04:05:06.157Z 
 *   requestBodies:
 *    Taskbody:
 *      description: Ein JSON Objekt mit TaskData
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'     
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /login:
 *   post:
 *     summary: Ein Login erstellen
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: email of the user
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: password of the user
 *     responses:
 *       200:
 *         description: user succesfully authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: strng
 *             required: true
 *             
 *       401:
 *         description: unauthorized
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /verify:
 *   get:
 *     summary: get the status of the cookie
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: authentifiziert.
 *         content:
 *           application/json:
 *             schema:
 *               type: strng
 *             required: true
 *             
 *       401:
 *         description: nicht authentifiziert.
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /logout:
 *   delete:
 *     summary: aktuelle Session beenden
 *     tags: [Auth]
 *     responses:
 *       204:
 *         description: erledigt aktuelle Session wurde gelöscht.
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The Tasks managing API
 * /tasks:
 *   post:
 *     summary: create a Task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created Task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *       422:
 *         description: The body object to post is null
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The Tasks managing API
 * /tasks:
 *   get:
 *     summary: get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The created Task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *       403:
 *         description: No authorization
 */

/**
 * @swagger
 * /Tasks/{id}:
 *   get:
 *     summary: get a Task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The Task id
 *     responses:
 *       200:
 *         description: The created Task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /Tasks/{id}:
 *   put:
 *     summary: Task verändern
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The Task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The changed Book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *       422:
 *         description: Id leer
 *       403:
 *         description: no authorization
 */

/**
 * @swagger
 * /Tasks/{id}:
 *   delete:
 *     summary: Task verändern
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The Task id to delete
 *     responses:
 *       200:
 *         description: Erfolgreich gelöscht.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 *       422:
 *         description: Id leer
 *       403:
 *         description: no authorization
 */



const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
 const server = require("./server.js");
const session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(session({ secret: "Behan Secret" }));

app.use(bodyParser.json())

const specs = swaggerJsDoc(server);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

let Tasks = [
    {
        id: 2,
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
    if (loginpwd == mypwd && loginmail != "") {
        req.session.authenticated = true;
        res.status(200).json("user authenticated")
    } else {
        res.sendStatus(401);
    }
});

app.get("/verify", (req, res) => {
    if (req.session.authenticated == true) {
        res.status(200).json("authentifiziert");
    } else {
        res.status(401).json("nicht authentifiziert");
    }
});

app.delete("/logout", (req, res) => {
    req.session.authenticated = false;
    res.status(204).json("done");
});

app.get("/tasks", (req, res) => {
    if (req.session.authenticated == true) {
        res.status(200).json(Tasks);
    } else {
        res.status(403).json("no auth");
    }
});

app.post("/tasks", (req, res) => {
    if (req.session.authenticated == true) {
        let Newtask = req.body;
        if (Newtask !== {}) {
            Tasks.push(Newtask);
            res.status(201).json(Newtask);
        } else {
            res.status(422).json("Leeres Objekt");
        }
    }
    else {
        res.status(403).json("no auth");
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
            res.status(404).json("nicht gefunden");
        }
    } else {
        res.status(403).json("no auth");
    }
});

app.put("/tasks/:ID", (req, res) => {
    if (req.session.authenticated == true) {
        const id = req.params.ID;
        let taskobject = req.body;
        if (IsNotNullChecker(taskobject) == true) {
            let index = Tasks.indexOf(FindById(Tasks, id));
            Tasks[index] = { ...Tasks[index], ...taskobject };
            res.status(200).json(taskobject);
        } else {
            res.status(422).json("Property leer");
        }
    }
    else {
        res.status(403).json("no auth");
    }
});

app.delete("/tasks/:ID", (req, res) => {
    if (req.session.authenticated == true) {
        const id = req.params.ID;
        let TasktoDelete = FindById(Tasks,id);
        let index = Tasks.indexOf(TasktoDelete);
        Tasks.splice(index, 1);
        res.status(202).json(TasktoDelete);
    } else {
        res.status(403).json("no auth");
    }
}
);

function FindById(data, id) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i];
        }
    }
}

// https://stackoverflow.com/questions/50619910/how-to-check-if-every-properties-in-an-object-are-null
function IsNotNullChecker(report) {
    return !Object.values(report).every((o) => o === "");
}

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

