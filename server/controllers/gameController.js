module.exports = {
  addGame: async (req, res) => {
    const { id } = req.session.user;
    const { game } = req.body;
    const db = req.app.get("db");
    const result = await db.check_for_game([game]);
    const existingGame = result[0];
    let gameId = 0;
    if (!existingGame) {
      const result = await db.add_game(game);
      console.log("result:", result);
      const { game_id } = result[0];
      //   console.log("game_id:", game_id);
      gameId = game_id;
      // return res.status(200);
    } else {
      console.log("gameController, existingGame:", existingGame);
      gameId = existingGame;
    }
    await db.add_ugj([id, gameId]);
    return res.sendStatus(200);
  },
};
