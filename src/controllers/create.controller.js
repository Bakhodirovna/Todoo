const Joi = require("joi")
const {pg} = require('../utils/pg')
const createTodo = async(req, res) =>{
    const {text} = req.body;
    const schema = Joi.object({
       text: Joi.string().min(8).max(600).required(),
    });
    const {error } = schema.validate({text});
    if (error) return res.status(400).json({message: error.message});


    const newTodo = await pg(`insert into todo(todo_text) values($1)`,text);
    res.status(201).json({message: "todo created"});

}

module.exports = createTodo;
