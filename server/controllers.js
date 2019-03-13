const { Chtr, Message, Room } = require('../database/models');

const controller = {
  chtr: {
    // get: (req, res) => {
      
    // },
    post: (req, res) => {
      const { chtr } = req.body;

      Chtr.create({ name: chtr.name, password: chtr.password })
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    },
    // put: (req, res) => {

    // },
    delete: (req, res) => {
      const { chtr } = req.query;

      Chtr.destroy({ where: { id: chtr.id } })
        .then(() => {
          res.status(202).send('Chtr deleted.');
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    }
  },
  message: {
    get: (req, res) => {
      const { room } = req.body;
      Message.findAll({ where: { roomId: room.roomId } })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    },
    post: (req, res) => {
      console.log('req: ', req);
      // const { postedBy,  postedIn, postedAt, content } = req.body;

      Message.create({  content: req.content, createdAt: req.postedAt, UpdatedAt: req.postedAt, chtrId: req.postedBy,  roomId: req.postedIn })
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    },
    // put: (req, res) => {

    // },
    delete: (req, res) => {
      const { id } = req.query;

      Message.destroy({where: {id: id} })
        .then(() => {
          res.status(202).send('Message deleted');
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  },
  room: {
    get: (req, res) => {
      Room.findAll({})
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    },
    post: (req, res) => {
      const { roomname, chtr } = req.body;
      
      Room.create({ roomname: roomname, createdBy: chtr })
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    },
    // put: (req, res) => {

    // },
    delete: (req, res) => {
      const { chtr, id } = req.query;
      // if(chtr.name === )
      Room.destroy({where: {id: id} })
      .then(() => {
        res.status(202).send('Room deleted');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
    }
  }
};

module.exports = {
  controller
};