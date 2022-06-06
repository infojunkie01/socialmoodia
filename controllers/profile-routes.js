const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment, Follows } = require('../models');

router.get('/:username', (req, res) => {
    const user = User.findOne({
        where: {
            username: req.params.username
        }
    }).then(userData => {
        Post.findAll({
            where: {
              // use the ID from the username
              user_id: userData.id
            },
            attributes: [
              'id',
              'body',
              'created_at'
            ],
            include: [
              {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                include: {
                  model: User,
                  attributes: ['username']
                }
              },
              {
                model: User,
                attributes: ['username']
              }
            ]
          })
            .then(dbPostData => {
              // serialize data before passing to template
              const posts = dbPostData.map(post => post.get({ plain: true }));
              res.render('user-page', { posts, loggedIn: true });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json(err);
            });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;