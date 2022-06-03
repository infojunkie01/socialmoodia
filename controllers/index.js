const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userPageRoutes = require('./user-page-routes');
const profileRoutes = require('./profile-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user-page', userPageRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
