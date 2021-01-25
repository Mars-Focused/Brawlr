module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.brawlr_user) {
      return res.status(401).send("Please log in");
    }
    next();
  },
};
