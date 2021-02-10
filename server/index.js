require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authController");
const gameCtrl = require("./controllers/gameController");
const spCtrl = require("./controllers/sPartnerController");
const Leila = require("./leila/leila");

const PORT = 5000;

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log(`Database Connected on port ${PORT}`);
  Leila.Fox(PORT, "Mars", false); //<-- Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox Leila.Fox
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
app.delete("/api/del_sp/:sp", spCtrl.delSP);
app.get("/api/get_sp_info/:sp", spCtrl.getSPInfo);

app.post("/api/add_game", gameCtrl.addGame);

//Include this with your other top-level middleware
app.use(express.static(`${__dirname}/../build`));

app.get("*", (res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => console.log(`...LOADING...`));
