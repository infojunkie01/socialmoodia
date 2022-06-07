const router = require('express').Router();
const { Post, User, Comment, Follow } = require('../models');

router.get('/', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if(dbUserData) {
            console.log(dbUserData);
            res.json(dbUserData).status(200);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;