const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/',
  [
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
  ],
  userController.createUser
);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;