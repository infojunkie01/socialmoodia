// const router = require('express').Router();
// const req = require('express/lib/request');
// const sequelize = require('../config/connection');
// const { Post, User, Comment, Follow } = require('../models');
// const withAuth = require('../utils/auth');



// router.get('/:username', withAuth (req, res) => {
//     Post.findAll({
//         where: {
//             username: req.session.username
//         },
//         attributes: [
//             'id',
//             'user_id'
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username', 'password' ],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             }
//         ]
//     })
//     .then(dbUserData) => {
//         if (!dbUserData) {
//             res.status(404).json({ message: 'no username found' });
//             return;
//         }
//     }
// }
// //     (req.params.username, function (err, results) {
// //         if(results[0]) {
// //             res.render('/profile', {
// //                 title: 'Profile',
// //                 userinfo: results[0]
// //             });
// //         } else {
// //             next();
// //         }
// //     })
// // );



// module.exports = router;