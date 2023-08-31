const {Router} = require('express');
const router = Router();

const {getTask, postTask, getTaskById,updateTaskStatus} = require('../controllers/index.controller')


router.get('/getTask', getTask);
router.post('/postTask', postTask);
router.get('/getTaskById/:id', getTaskById);
router.put('/updateTaskStatus/:id', updateTaskStatus);


module.exports= router;