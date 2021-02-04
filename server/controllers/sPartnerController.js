module.exports = {
  getRecSP: async (req, res) => {
    const { id } = req.session.user;
    const db = req.app.get("db");
    RSP = await db.get_rec_sp(id);
    res.status(200).send(RSP);
  },

  addSP: async (req, res) => {
    const { id } = req.session.user;
    const { new_sp } = req.body;
    const db = req.app.get("db");
    const response = await db.get_sp_id(new_sp);
    const { user_id } = response[0];
    // console.log(user_id);
    await db.add_uuj(id, user_id);
    res.sendStatus(200);
  },

  getMySP: async (req, res) => {
    const { id } = req.session.user;
    // console.log(id);
    const UUJId = await req.app.get("db").get_uuj_id([id]);
    const mappedSP = UUJId.map((connection) => {
      if (connection.user_id_1 === id) {
        return connection.user_id_2;
      } else {
        return connection.user_id_1;
      }
    });
    // console.log(mappedComp);
    const SPList = await req.app
      .get("db")
      .brawlr_users.find(
        { user_id: mappedSP },
        { fields: ["user_id", "username"] }
      );
    return res.send(SPList);
  },

  delSP: async (req, res) => {
    const { sp } = req.params;
    const { id } = req.session.user;
    const db = req.app.get("db");
    // get the ID of the other sp
    const spInfo = await db.get_user(sp);
    // console.log("spInfo:", spInfo);
    const { user_id } = spInfo[0];
    await db.delete_sp(id, user_id);
    res.sendStatus(200);
  },

  getSPInfo: async (req, res) => {
    const db = req.app.get("db");
    const { sp } = req.params;
    const Info = await db.get_user_info(sp);
    res.status(200).send(Info);
  },
};
