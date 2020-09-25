module.exports  = app => {
  const controller = require('../controllers/games')();

  app.route('/api/v1/games').get(controller.listGames);

}