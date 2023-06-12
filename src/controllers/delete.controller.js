const {pg} = require('../utils/pg');
const deleteTodo = async(req,res) =>{
        try {
         const { id } = req.params;
         const todoDel = await pg(`delete from todo where todo_id=$1 `, id);
         res.status(200).json({ message: "todo deleted!" });
        } catch (error) {
         console.log(error);
        }
}

module.exports = deleteTodo;
