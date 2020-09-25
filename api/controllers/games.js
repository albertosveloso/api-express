module.exports = () => {
  
  const gamesDB = require('../data/games.json');
  const controller = {};

  controller.listGames = (req, res) => res.status(200).json(gamesDB);

  return controller;

}