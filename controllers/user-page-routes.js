const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Follows } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'body',
        // 'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'body', 'post_id', 'user_id'],
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
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'body',
        // 'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'body', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username' ]
          }
        },
        {
          model: User,
          attributes: ['username' ]
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
            post,
            loggedIn: true
            });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/create/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
  
      attributes: [
        'id',
        'body',
        // 'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'body', 'post_id', 'user_id'],
          // attributes: ['id', 'body', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username' ]
          }
        },
        {
          model: User,
          attributes: ['username' ]
        }
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('new-post', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;