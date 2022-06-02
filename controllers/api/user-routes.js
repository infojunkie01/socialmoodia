const router = require('express').Router();
const { user } = require('../../models');

// Create New user

router.post('/', async (req, res) => {
    try {
        const userData = await user.create({

        
            username: req.body.username,
            password: req.body.password,
    });

    req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(userData);
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login

router.post('/login', async (req, res) => {
    try {
        const userData = await user.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!userData) {
            res 
                .status(400)
                .json({ message: 'Incorrect credentials. Please try again!'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res 
                .status(400)
                .json({message: 'Incorrect credentials. Please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res
                .status(200)
                .json({user: userData, message: 'Successfully logged in!'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });

    } else {
        res.status(404).end();
    }
});

module.exports = router;
