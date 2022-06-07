const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Follow } = require('../models');

router.get('/', (req, res) => {

    if (req.session.loggedIn) {
      Post.findAll({
        attributes: [
          'id',
          'body',
          'created_at'
        ],
        order: [
          ['created_at', 'DESC']
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id',  'user_id', 'created_at'],
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
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('homepage', {
              posts,
              loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
    else {
      res.redirect('/login');
    }

  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

  
  router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'body',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username'  ]
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
  
        // pass data to template
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


module.exports = router;

