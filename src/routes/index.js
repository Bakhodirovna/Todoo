const { Router} = require('express');
const {getAll, getById} = require('../controllers/getAll.controller');
const createTodo = require('../controllers/create.controller');
const {updateTodo, updateStatus} = require('../controllers/update.controller');
const deleteTodo = require('../controllers/delete.controller');
const {pagination} = require('../controllers/paginatio.controller');

const router =  Router();

router.post("/createTodo", createTodo );
router.get("/getTodo", getAll);
router.get("/get/:id", getById);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);
router.put("/updateStatus/:id", updateStatus);
router.get("/pagination", pagination);




module.exports = router