require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authController");
const gameCtrl = require("./controllers/gameController");
const spCtrl = require("./controllers/sPartnerController");
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
  console.log(`DB Ready Nya~`);
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

app.get("/api/get_rec_sp", spCtrl.getRecSP);
app.post("/api/add_sp", spCtrl.addSP);
app.get("/api/get_my_sp", spCtrl.getMySP);
app.delete("/api/del_sp", spCtrl.delSP);

app.post("/api/add_game", gameCtrl.addGame);

app.listen(PORT, () => console.log(`Port ${PORT} Ready`));
