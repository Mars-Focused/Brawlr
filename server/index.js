require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authController");
// const compCtrl = require("./controllers/compController");
// const dateCtrl = require("./controllers/dateController");
// const auth = require("./middleware/authMiddleware");

const PORT = 5000;

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("Database connected! Nya~");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);
app.put("/auth/add_contact_info", authCtrl.addCInfo);

app.listen(PORT, () => console.log(`Port ${PORT} Ready Master! `));
