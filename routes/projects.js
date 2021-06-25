var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projectsController');

/* Segundo nivel de routeo */
router.get('/', projectsController.getAll);
router.post('/', projectsController.create);
router.put('/:id', projectsController.update);
router.delete('/:id', projectsController.delete);
//router.get('/:id', projectsController.getById);
module.exports = router;
