const {pg} = require('../utils/pg');
const updateTodo = async(req, res) =>{
    try {
        const {id} = req.params;
        const {text} = req.body;
        const todoUp = await pg(`update todo SET todo_text=$1 where todo_id=$2 `,text, id);
        res.status(200).json({ message: "todo updated!" });
    } catch (error) {
        console.log(error);
    }
};
const updateStatus = async(req, res) =>{
    try {
        const {id} = req.params;
        const {status} = req.body;
        const todoUpStatus = await pg(`update todo SET todo_status=$1 where todo_id=$2 `,status, id);
        res.status(200).json({ message:"status updated" });
    } catch (error) {
        console.log(error);
    }
};




module.exports = {updateTodo , updateStatus};
