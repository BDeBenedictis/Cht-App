const router = require('express').Router();
const { controller } = require('./controllers.js');

// router.route('/chtr')
//   .get(controller.chtr.get)
//   .post(controller.chtr.post)
//   .put(controller.chtr.put)
//   .delete(controller.chtr.delete);

router.route('/rooms')
  .get(controller.room.get)
  .post(controller.room.post)
  .put(controller.room.put)
  .delete(controller.room.delete);

router.route('/messages')
  .get(controller.message.get)
  .post(controller.message.post)
  .put(controller.message.put)
  .delete(controller.message.delete);

module.exports = {
  router
};